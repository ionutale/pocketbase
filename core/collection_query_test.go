package core_test

import (
	"context"
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"slices"
	"strings"
	"testing"
	"time"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tests"
	"github.com/pocketbase/pocketbase/tools/list"
)

func TestCollectionQuery(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	expected := "SELECT {{_collections}}.* FROM `_collections`"

	sql := app.CollectionQuery().Build().SQL()
	if sql != expected {
		t.Errorf("Expected sql %s, got %s", expected, sql)
	}
}

func TestReloadCachedCollections(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	err := app.ReloadCachedCollections()
	if err != nil {
		t.Fatal(err)
	}

	cached := app.Store().Get(core.StoreKeyCachedCollections)

	cachedCollections, ok := cached.([]*core.Collection)
	if !ok {
		t.Fatalf("Expected []*core.Collection, got %T", cached)
	}

	collections, err := app.FindAllCollections()
	if err != nil {
		t.Fatalf("Failed to retrieve all collections: %v", err)
	}

	if len(cachedCollections) != len(collections) {
		t.Fatalf("Expected %d collections, got %d", len(collections), len(cachedCollections))
	}

	for _, c := range collections {
		var exists bool
		for _, cc := range cachedCollections {
			if cc.Id == c.Id {
				exists = true
				break
			}
		}
		if !exists {
			t.Fatalf("The collections cache is missing collection %q", c.Name)
		}
	}
}

func TestFindAllCollections(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	scenarios := []struct {
		collectionTypes []string
		expectTotal     int
	}{
		{nil, 16},
		{[]string{}, 16},
		{[]string{""}, 16},
		{[]string{"unknown"}, 0},
		{[]string{"unknown", core.CollectionTypeAuth}, 4},
		{[]string{core.CollectionTypeAuth, core.CollectionTypeView}, 7},
	}

	for i, s := range scenarios {
		t.Run(fmt.Sprintf("%d_%s", i, strings.Join(s.collectionTypes, "_")), func(t *testing.T) {
			collections, err := app.FindAllCollections(s.collectionTypes...)
			if err != nil {
				t.Fatal(err)
			}

			if len(collections) != s.expectTotal {
				t.Fatalf("Expected %d collections, got %d", s.expectTotal, len(collections))
			}

			expectedTypes := list.NonzeroUniques(s.collectionTypes)
			if len(expectedTypes) > 0 {
				for _, c := range collections {
					if !slices.Contains(expectedTypes, c.Type) {
						t.Fatalf("Unexpected collection type %s\n%v", c.Type, c)
					}
				}
			}
		})
	}
}

func TestFindCollectionByNameOrId(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	scenarios := []struct {
		nameOrId    string
		expectError bool
	}{
		{"", true},
		{"missing", true},
		{"wsmn24bux7wo113", false},
		{"demo1", false},
		{"DEMO1", false}, // case insensitive
	}

	for i, s := range scenarios {
		t.Run(fmt.Sprintf("%d_%s", i, s.nameOrId), func(t *testing.T) {
			model, err := app.FindCollectionByNameOrId(s.nameOrId)

			hasErr := err != nil
			if hasErr != s.expectError {
				t.Fatalf("Expected hasErr to be %v, got %v (%v)", s.expectError, hasErr, err)
			}

			if model != nil && model.Id != s.nameOrId && !strings.EqualFold(model.Name, s.nameOrId) {
				t.Fatalf("Expected model with identifier %s, got %v", s.nameOrId, model)
			}
		})
	}
}

func TestFindCachedCollectionByNameOrId(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	totalQueries := 0
	app.ConcurrentDB().(*dbx.DB).QueryLogFunc = func(ctx context.Context, t time.Duration, sql string, rows *sql.Rows, err error) {
		totalQueries++
	}

	run := func(withCache bool) {
		scenarios := []struct {
			nameOrId    string
			expectError bool
		}{
			{"", true},
			{"missing", true},
			{"wsmn24bux7wo113", false},
			{"demo1", false},
			{"DEMO1", false}, // case insensitive
		}

		var expectedTotalQueries int

		if withCache {
			err := app.ReloadCachedCollections()
			if err != nil {
				t.Fatal(err)
			}
		} else {
			app.Store().Reset(nil)
			expectedTotalQueries = len(scenarios)
		}

		totalQueries = 0

		for i, s := range scenarios {
			t.Run(fmt.Sprintf("%d_%s", i, s.nameOrId), func(t *testing.T) {
				model, err := app.FindCachedCollectionByNameOrId(s.nameOrId)

				hasErr := err != nil
				if hasErr != s.expectError {
					t.Fatalf("Expected hasErr to be %v, got %v (%v)", s.expectError, hasErr, err)
				}

				if model != nil && model.Id != s.nameOrId && !strings.EqualFold(model.Name, s.nameOrId) {
					t.Fatalf("Expected model with identifier %s, got %v", s.nameOrId, model)
				}
			})
		}

		if totalQueries != expectedTotalQueries {
			t.Fatalf("Expected %d totalQueries, got %d", expectedTotalQueries, totalQueries)
		}
	}

	run(true)

	run(false)
}

func TestFindCollectionReferences(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	collection, err := app.FindCollectionByNameOrId("demo3")
	if err != nil {
		t.Fatal(err)
	}

	result, err := app.FindCollectionReferences(
		collection,
		collection.Id,
		// test whether "nonempty" exclude ids condition will be skipped
		"",
		"",
	)
	if err != nil {
		t.Fatal(err)
	}

	if len(result) != 1 {
		t.Fatalf("Expected 1 collection, got %d: %v", len(result), result)
	}

	expectedFields := []string{
		"rel_one_no_cascade",
		"rel_one_no_cascade_required",
		"rel_one_cascade",
		"rel_one_unique",
		"rel_many_no_cascade",
		"rel_many_no_cascade_required",
		"rel_many_cascade",
		"rel_many_unique",
	}

	for col, fields := range result {
		if col.Name != "demo4" {
			t.Fatalf("Expected collection demo4, got %s", col.Name)
		}
		if len(fields) != len(expectedFields) {
			t.Fatalf("Expected fields %v, got %v", expectedFields, fields)
		}
		for i, f := range fields {
			if !slices.Contains(expectedFields, f.GetName()) {
				t.Fatalf("[%d] Didn't expect field %v", i, f)
			}
		}
	}
}

func TestFindCollectionReferences_Polymorphic(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	// Use existing demo collections and mutate one field of demo4 to reference demo3 also
	demo3, err := app.FindCollectionByNameOrId("demo3")
	if err != nil {
		t.Fatal(err)
	}
	demo4, err := app.FindCollectionByNameOrId("demo4")
	if err != nil {
		t.Fatal(err)
	}

	// clone and modify in memory only (tests reference functions read from app.CollectionQuery())
	// find a relation field targeting demo3 and make it polymorphic to include demo3 explicitly
	var changed bool
	for i, rf := range demo4.Fields {
		rel, ok := rf.(*core.RelationField)
		if !ok {
			continue
		}
		if rel.CollectionId == demo3.Id {
			rel.CollectionIds = []string{demo3.Id}
			demo4.Fields[i] = rel
			changed = true
			break
		}
	}
	if !changed {
		t.Skip("no suitable relation field found for polymorphic test; skipping")
	}

	// Save the modified collection so that queries reflect it
	if err := app.Save(demo4); err != nil {
		t.Fatal(err)
	}

	result, err := app.FindCollectionReferences(demo3)
	if err != nil {
		t.Fatal(err)
	}
	if len(result) == 0 {
		t.Fatalf("Expected at least 1 collection reference to demo3, got %d", len(result))
	}
}

func TestFindCachedCollectionReferences(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	collection, err := app.FindCollectionByNameOrId("demo3")
	if err != nil {
		t.Fatal(err)
	}

	totalQueries := 0
	app.ConcurrentDB().(*dbx.DB).QueryLogFunc = func(ctx context.Context, t time.Duration, sql string, rows *sql.Rows, err error) {
		totalQueries++
	}

	run := func(withCache bool) {
		var expectedTotalQueries int

		if withCache {
			err := app.ReloadCachedCollections()
			if err != nil {
				t.Fatal(err)
			}
		} else {
			app.Store().Reset(nil)
			expectedTotalQueries = 1
		}

		totalQueries = 0

		result, err := app.FindCachedCollectionReferences(
			collection,
			collection.Id,
			// test whether "nonempty" exclude ids condition will be skipped
			"",
			"",
		)
		if err != nil {
			t.Fatal(err)
		}

		if len(result) != 1 {
			t.Fatalf("Expected 1 collection, got %d: %v", len(result), result)
		}

		expectedFields := []string{
			"rel_one_no_cascade",
			"rel_one_no_cascade_required",
			"rel_one_cascade",
			"rel_one_unique",
			"rel_many_no_cascade",
			"rel_many_no_cascade_required",
			"rel_many_cascade",
			"rel_many_unique",
		}

		for col, fields := range result {
			if col.Name != "demo4" {
				t.Fatalf("Expected collection demo4, got %s", col.Name)
			}
			if len(fields) != len(expectedFields) {
				t.Fatalf("Expected fields %v, got %v", expectedFields, fields)
			}
			for i, f := range fields {
				if !slices.Contains(expectedFields, f.GetName()) {
					t.Fatalf("[%d] Didn't expect field %v", i, f)
				}
			}
		}

		if totalQueries != expectedTotalQueries {
			t.Fatalf("Expected %d totalQueries, got %d", expectedTotalQueries, totalQueries)
		}
	}

	run(true)

	run(false)
}

func TestFindCachedCollectionReferences_Polymorphic(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	demo3, err := app.FindCollectionByNameOrId("demo3")
	if err != nil {
		t.Fatal(err)
	}
	demo4, err := app.FindCollectionByNameOrId("demo4")
	if err != nil {
		t.Fatal(err)
	}

	// mutate one relation field to be polymorphic (allow demo3)
	var changed bool
	for i, rf := range demo4.Fields {
		rel, ok := rf.(*core.RelationField)
		if !ok {
			continue
		}
		if rel.CollectionId == demo3.Id {
			rel.CollectionIds = []string{demo3.Id}
			demo4.Fields[i] = rel
			changed = true
			break
		}
	}
	if !changed {
		t.Skip("no suitable relation field found for polymorphic test; skipping")
	}

	// persist and warm the cache
	if err := app.Save(demo4); err != nil {
		t.Fatal(err)
	}
	if err := app.ReloadCachedCollections(); err != nil {
		t.Fatal(err)
	}

	result, err := app.FindCachedCollectionReferences(demo3)
	if err != nil {
		t.Fatal(err)
	}
	if len(result) == 0 {
		t.Fatalf("Expected at least 1 collection reference to demo3, got %d", len(result))
	}
}

func TestRelationField_ValidateValue_Polymorphic(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	demo3, _ := app.FindCollectionByNameOrId("demo3")
	demo4, _ := app.FindCollectionByNameOrId("demo4")

	// build a polymorphic relation field allowing demo3 and demo4
	rf := &core.RelationField{
		Name:          "poly",
		CollectionIds: []string{demo3.Id, demo4.Id},
		MaxSelect:     2,
	}

	// create a temp record using demo4 collection to host the field
	host := core.NewRecord(demo4)

	// load one real record id from each collection
	var demo3Recs []*core.Record
	if err := app.RecordQuery(demo3).Limit(1).All(&demo3Recs); err != nil || len(demo3Recs) == 0 {
		t.Fatalf("failed to load demo3 record: %v", err)
	}
	var demo4Recs []*core.Record
	if err := app.RecordQuery(demo4).Limit(1).All(&demo4Recs); err != nil || len(demo4Recs) == 0 {
		t.Fatalf("failed to load demo4 record: %v", err)
	}

	// happy: composite values for 2 existing records
	host.Set("poly", []string{demo3.Id + ":" + demo3Recs[0].Id, demo4.Id + ":" + demo4Recs[0].Id})
	if err := rf.ValidateValue(context.Background(), app, host); err != nil {
		t.Fatalf("expected ok, got %v", err)
	}

	// error: plain id not allowed when multiple collections configured
	host.Set("poly", []string{"3q2fy7n4cx6h1zb"})
	if err := rf.ValidateValue(context.Background(), app, host); err == nil {
		t.Fatalf("expected error for plain id in polymorphic relation")
	}

	// error: invalid collection id in composite
	host.Set("poly", []string{"badcol:whatever"})
	if err := rf.ValidateValue(context.Background(), app, host); err == nil {
		t.Fatalf("expected error for invalid collection in composite value")
	}
}

func TestExpandRecords_Polymorphic_DefaultAndScoped(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	// Prepare: create a temp collection with a polymorphic relation (demo4 -> demo3|demo4)
	demo3, _ := app.FindCollectionByNameOrId("demo3")
	demo4, _ := app.FindCollectionByNameOrId("demo4")

	// Clone demo4 to avoid breaking existing fixtures; reuse demo4 for simplicity but add a new field
	// Add a new relation field poly that allows demo3 and demo4
	poly := &core.RelationField{
		Name:          "poly",
		CollectionIds: []string{demo3.Id, demo4.Id},
		MaxSelect:     2,
	}
	demo4.Fields = append(demo4.Fields, poly)
	if err := app.Save(demo4); err != nil {
		t.Fatal(err)
	}

	// Create a record in demo4 that references one item from each collection
	var d3 []*core.Record
	if err := app.RecordQuery(demo3).Limit(1).All(&d3); err != nil || len(d3) == 0 {
		t.Fatalf("failed to load demo3 record: %v", err)
	}
	var d4 []*core.Record
	if err := app.RecordQuery(demo4).Limit(1).All(&d4); err != nil || len(d4) == 0 {
		t.Fatalf("failed to load demo4 record: %v", err)
	}

	host := core.NewRecord(demo4)
	host.Set("poly", []string{demo3.Id + ":" + d3[0].Id, demo4.Id + ":" + d4[0].Id})

	// Default expand: should fetch both groups and place under expand["poly"]
	failed := app.ExpandRecord(host, []string{"poly"}, nil)
	if len(failed) > 0 {
		t.Fatalf("unexpected expand errors: %v", failed)
	}
	exp := host.Expand()["poly"]
	if exp == nil {
		t.Fatalf("expected expanded poly")
	}

	// Scoped expand to demo3 only via selector
	host2 := core.NewRecord(demo4)
	host2.Set("poly", []string{demo3.Id + ":" + d3[0].Id, demo4.Id + ":" + d4[0].Id})
	failed2 := app.ExpandRecord(host2, []string{"poly@" + demo3.Id}, nil)
	if len(failed2) > 0 {
		t.Fatalf("unexpected expand errors (scoped): %v", failed2)
	}
	// ensure the expand contains only demo3 record
	switch v := host2.Expand()["poly"].(type) {
	case []*core.Record:
		if len(v) != 1 || v[0].Collection().Id != demo3.Id {
			t.Fatalf("expected only demo3 expanded; got: %v", v)
		}
	default:
		t.Fatalf("unexpected expand type: %T", v)
	}
}

func TestIsCollectionNameUnique(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	scenarios := []struct {
		name      string
		excludeId string
		expected  bool
	}{
		{"", "", false},
		{"demo1", "", false},
		{"Demo1", "", false},
		{"new", "", true},
		{"demo1", "wsmn24bux7wo113", true},
	}

	for i, s := range scenarios {
		t.Run(fmt.Sprintf("%d_%s", i, s.name), func(t *testing.T) {
			result := app.IsCollectionNameUnique(s.name, s.excludeId)
			if result != s.expected {
				t.Errorf("Expected %v, got %v", s.expected, result)
			}
		})
	}
}

func TestFindCollectionTruncate(t *testing.T) {
	t.Parallel()

	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	countFiles := func(collectionId string) (int, error) {
		entries, err := os.ReadDir(filepath.Join(app.DataDir(), "storage", collectionId))
		return len(entries), err
	}

	t.Run("truncate view", func(t *testing.T) {
		view2, err := app.FindCollectionByNameOrId("view2")
		if err != nil {
			t.Fatal(err)
		}

		err = app.TruncateCollection(view2)
		if err == nil {
			t.Fatalf("Expected truncate to fail because view collections can't be truncated")
		}
	})

	t.Run("truncate failure", func(t *testing.T) {
		demo3, err := app.FindCollectionByNameOrId("demo3")
		if err != nil {
			t.Fatal(err)
		}

		originalTotalRecords, err := app.CountRecords(demo3)
		if err != nil {
			t.Fatal(err)
		}

		originalTotalFiles, err := countFiles(demo3.Id)
		if err != nil {
			t.Fatal(err)
		}

		err = app.TruncateCollection(demo3)
		if err == nil {
			t.Fatalf("Expected truncate to fail due to cascade delete failed required constraint")
		}

		// short delay to ensure that the file delete goroutine has been executed
		time.Sleep(100 * time.Millisecond)

		totalRecords, err := app.CountRecords(demo3)
		if err != nil {
			t.Fatal(err)
		}

		if totalRecords != originalTotalRecords {
			t.Fatalf("Expected %d records, got %d", originalTotalRecords, totalRecords)
		}

		totalFiles, err := countFiles(demo3.Id)
		if err != nil {
			t.Fatal(err)
		}
		if totalFiles != originalTotalFiles {
			t.Fatalf("Expected %d files, got %d", originalTotalFiles, totalFiles)
		}
	})

	t.Run("truncate success", func(t *testing.T) {
		demo5, err := app.FindCollectionByNameOrId("demo5")
		if err != nil {
			t.Fatal(err)
		}

		err = app.TruncateCollection(demo5)
		if err != nil {
			t.Fatal(err)
		}

		// short delay to ensure that the file delete goroutine has been executed
		time.Sleep(100 * time.Millisecond)

		total, err := app.CountRecords(demo5)
		if err != nil {
			t.Fatal(err)
		}
		if total != 0 {
			t.Fatalf("Expected all records to be deleted, got %v", total)
		}

		totalFiles, err := countFiles(demo5.Id)
		if err != nil {
			t.Fatal(err)
		}

		if totalFiles != 0 {
			t.Fatalf("Expected truncated record files to be deleted, got %d", totalFiles)
		}

		// try to truncate again (shouldn't return an error)
		err = app.TruncateCollection(demo5)
		if err != nil {
			t.Fatal(err)
		}
	})
}
