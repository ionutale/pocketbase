package core

import (
	"errors"
	"fmt"
	"log"
	"regexp"
	"strings"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/tools/dbutils"
	"github.com/pocketbase/pocketbase/tools/list"
)

// ExpandFetchFunc defines the function that is used to fetch the expanded relation records.
type ExpandFetchFunc func(relCollection *Collection, relIds []string) ([]*Record, error)

// ExpandRecord expands the relations of a single Record model.
//
// If optFetchFunc is not set, then a default function will be used
// that returns all relation records.
//
// Returns a map with the failed expand parameters and their errors.
func (app *BaseApp) ExpandRecord(record *Record, expands []string, optFetchFunc ExpandFetchFunc) map[string]error {
	return app.ExpandRecords([]*Record{record}, expands, optFetchFunc)
}

// ExpandRecords expands the relations of the provided Record models list.
//
// If optFetchFunc is not set, then a default function will be used
// that returns all relation records.
//
// Returns a map with the failed expand parameters and their errors.
func (app *BaseApp) ExpandRecords(records []*Record, expands []string, optFetchFunc ExpandFetchFunc) map[string]error {
	normalized := normalizeExpands(expands)

	failed := map[string]error{}

	for _, expand := range normalized {
		if err := app.expandRecords(records, expand, optFetchFunc, 1); err != nil {
			failed[expand] = err
		}
	}

	return failed
}

// Deprecated
var indirectExpandRegexOld = regexp.MustCompile(`^(\w+)\((\w+)\)$`)

var indirectExpandRegex = regexp.MustCompile(`^(\w+)_via_(\w+)$`)

// notes:
// - if fetchFunc is nil, dao.FindRecordsByIds will be used
// - all records are expected to be from the same collection
// - if maxNestedRels(6) is reached, the function returns nil ignoring the remaining expand path
func (app *BaseApp) expandRecords(records []*Record, expandPath string, fetchFunc ExpandFetchFunc, recursionLevel int) error {
	if fetchFunc == nil {
		// load a default fetchFunc
		fetchFunc = func(relCollection *Collection, relIds []string) ([]*Record, error) {
			return app.FindRecordsByIds(relCollection.Id, relIds)
		}
	}

	if expandPath == "" || recursionLevel > maxNestedRels || len(records) == 0 {
		return nil
	}

	mainCollection := records[0].Collection()

	var relField *RelationField
	var relCollection *Collection
	var explicitTarget bool

	parts := strings.SplitN(expandPath, ".", 2)
	var matches []string

	// @todo remove the old syntax support
	if strings.Contains(parts[0], "(") {
		matches = indirectExpandRegexOld.FindStringSubmatch(parts[0])
		if len(matches) == 3 {
			log.Printf(
				"%s expand format is deprecated and will be removed in the future. Consider replacing it with %s_via_%s.\n",
				matches[0],
				matches[1],
				matches[2],
			)
		}
	} else {
		matches = indirectExpandRegex.FindStringSubmatch(parts[0])
	}

	if len(matches) == 3 {
		indirectRel, _ := getCollectionByModelOrIdentifier(app, matches[1])
		if indirectRel == nil {
			return fmt.Errorf("couldn't find back-related collection %q", matches[1])
		}

		indirectRelField, _ := indirectRel.Fields.GetByName(matches[2]).(*RelationField)
		if indirectRelField == nil || indirectRelField.CollectionId != mainCollection.Id {
			return fmt.Errorf("couldn't find back-relation field %q in collection %q", matches[2], indirectRel.Name)
		}

		// add the related id(s) as a dynamic relation field value to
		// allow further expand checks at later stage in a more unified manner
		prepErr := func() error {
			q := app.ConcurrentDB().Select("id").
				From(indirectRel.Name).
				Limit(1000) // the limit is arbitrary chosen and may change in the future

			if indirectRelField.IsMultiple() {
				q.AndWhere(dbx.Exists(dbx.NewExp(fmt.Sprintf(
					"SELECT 1 FROM %s je WHERE je.value = {:id}",
					dbutils.JSONEach(indirectRelField.Name),
				))))
			} else {
				q.AndWhere(dbx.NewExp("[[" + indirectRelField.Name + "]] = {:id}"))
			}

			pq := q.Build().Prepare()

			for _, record := range records {
				var relIds []string

				err := pq.Bind(dbx.Params{"id": record.Id}).Column(&relIds)
				if err != nil {
					return errors.Join(err, pq.Close())
				}

				if len(relIds) > 0 {
					record.Set(parts[0], relIds)
				}
			}

			return pq.Close()
		}()
		if prepErr != nil {
			return prepErr
		}

		// indirect/back relation
		relField = &RelationField{
			Name:         parts[0],
			MaxSelect:    2147483647,
			CollectionId: indirectRel.Id,
		}
		if _, ok := dbutils.FindSingleColumnUniqueIndex(indirectRel.Indexes, indirectRelField.GetName()); ok {
			relField.MaxSelect = 1
		}
		relCollection = indirectRel
	} else {
		// direct relation
		// detect optional target selector: fieldName@<collectionNameOrId>
		seg := parts[0]
		fieldName := seg
		var targetCollection *Collection
		if at := strings.IndexByte(seg, '@'); at > 0 && at < len(seg)-1 {
			fieldName = seg[:at]
			targetCollection, _ = getCollectionByModelOrIdentifier(app, seg[at+1:])
			if targetCollection == nil {
				return fmt.Errorf("couldn't find related collection %q", seg[at+1:])
			}
		}

		relField, _ = mainCollection.Fields.GetByName(fieldName).(*RelationField)
		if relField == nil {
			return fmt.Errorf("couldn't find relation field %q in collection %q", fieldName, mainCollection.Name)
		}

		if targetCollection != nil {
			// ensure target is allowed
			allowed := relField.AllowedCollections()
			var ok bool
			for _, a := range allowed {
				if a == targetCollection.Id {
					ok = true
					break
				}
			}
			if !ok {
				return fmt.Errorf("invalid expand target %q for relation %q", targetCollection.Name, relField.Name)
			}
			relCollection = targetCollection
			explicitTarget = true
		} else {
			// default single collection (non-polymorphic fallback)
			relCollection, _ = getCollectionByModelOrIdentifier(app, relField.CollectionId)
			// relCollection may be nil for polymorphic relations without base collection; will handle later per-group
		}

		// replace the parts[0] with the bare fieldName to ensure expand key remains the field name only
		parts[0] = fieldName
	}

	// ---------------------------------------------------------------

	// extract and group the ids of the relations to expand
	grouped := map[string][]string{}
	for _, record := range records {
		for _, raw := range record.GetStringSlice(relField.Name) {
			v := "" + raw
			if idx := strings.IndexByte(v, ':'); idx > 0 && idx < len(v)-1 {
				cId := v[:idx]
				rId := v[idx+1:]
				// if an explicit target was set, keep only that group
				if explicitTarget && relCollection != nil && cId != relCollection.Id {
					continue
				}
				grouped[cId] = append(grouped[cId], rId)
			} else {
				// plain id -> assign to known single collection
				var cId string
				if relCollection != nil {
					cId = relCollection.Id
				} else if relField.CollectionId != "" {
					cId = relField.CollectionId
				} else {
					// cannot resolve plain id without a default collection; skip
					continue
				}
				grouped[cId] = append(grouped[cId], v)
			}
		}
	}

	// fetch rels per group (handles both single and polymorphic cases)
	rels := []*Record{}
	if len(grouped) == 0 {
		// No concrete ids collected. For non-polymorphic or explicitly scoped
		// relations invoke the fetchFunc with an empty id slice to preserve
		// the historical behavior and allow error propagation (used in tests).
		var c *Collection
		if relCollection != nil {
			c = relCollection
		} else if relField.CollectionId != "" {
			var err error
			c, err = app.FindCachedCollectionByNameOrId(relField.CollectionId)
			if err != nil {
				return err
			}
		}
		if c != nil {
			if _, err := fetchFunc(c, []string{}); err != nil {
				return err
			}
		}
	} else {
		for cId, ids := range grouped {
			// find collection by id
			c, err := app.FindCachedCollectionByNameOrId(cId)
			if err != nil {
				return err
			}
			items, err := fetchFunc(c, list.ToUniqueStringSlice(ids))
			if err != nil {
				return err
			}
			rels = append(rels, items...)
		}
	}

	// expand nested fields
	if len(parts) > 1 {
		err := app.expandRecords(rels, parts[1], fetchFunc, recursionLevel+1)
		if err != nil {
			return err
		}
	}

	// reindex with both id and composite key to support polymorphic values
	indexedRels := make(map[string]*Record, len(rels)*2)
	for _, rel := range rels {
		indexedRels[rel.Id] = rel
		// attempt to infer collection id from rel.Model.Collection()
		if rel.Collection() != nil {
			indexedRels[rel.Collection().Id+":"+rel.Id] = rel
		}
	}

	for _, model := range records {
		// init expand if not already
		// (this is done to ensure that the "expand" key will be returned in the response even if empty)
		if model.expand == nil {
			model.SetExpand(nil)
		}

		relIds := model.GetStringSlice(relField.Name)

		validRels := make([]*Record, 0, len(relIds))
		for _, raw := range relIds {
			v := "" + raw
			// 1) try exact match (works for plain ids and composite keys when present)
			if rel, ok := indexedRels[v]; ok {
				validRels = append(validRels, rel)
				continue
			}
			// 2) if composite, fallback to matching by plain id part
			if idx := strings.IndexByte(v, ':'); idx > 0 && idx < len(v)-1 {
				idOnly := v[idx+1:]
				if rel, ok := indexedRels[idOnly]; ok {
					validRels = append(validRels, rel)
				}
			}
		}

		if len(validRels) == 0 {
			continue // no valid relations
		}

		expandData := model.Expand()

		// normalize access to the previously expanded rel records (if any)
		var oldExpandedRels []*Record
		switch v := expandData[relField.Name].(type) {
		case nil:
			// no old expands
		case *Record:
			oldExpandedRels = []*Record{v}
		case []*Record:
			oldExpandedRels = v
		}

		// merge expands
		for _, oldExpandedRel := range oldExpandedRels {
			// find a matching rel record
			for _, rel := range validRels {
				if rel.Id != oldExpandedRel.Id {
					continue
				}

				rel.MergeExpand(oldExpandedRel.Expand())
			}
		}

		// update the expanded data
		if relField.IsMultiple() {
			expandData[relField.Name] = validRels
		} else {
			expandData[relField.Name] = validRels[0]
		}

		model.SetExpand(expandData)
	}

	return nil
}

// normalizeExpands normalizes expand strings and merges self containing paths
// (eg. ["a.b.c", "a.b", "   test  ", "  ", "test"] -> ["a.b.c", "test"]).
func normalizeExpands(paths []string) []string {
	// normalize paths
	normalized := make([]string, 0, len(paths))
	for _, p := range paths {
		p = strings.ReplaceAll(p, " ", "") // replace spaces
		p = strings.Trim(p, ".")           // trim incomplete paths
		if p != "" {
			normalized = append(normalized, p)
		}
	}

	// merge containing paths
	result := make([]string, 0, len(normalized))
	for i, p1 := range normalized {
		var skip bool
		for j, p2 := range normalized {
			if i == j {
				continue
			}
			if strings.HasPrefix(p2, p1+".") {
				// skip because there is more detailed expand path
				skip = true
				break
			}
		}
		if !skip {
			result = append(result, p1)
		}
	}

	return list.ToUniqueStringSlice(result)
}
