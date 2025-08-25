package core_test

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tests"
)

func TestRecordUploadFileMethod(t *testing.T) {
	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	collection, err := app.FindCachedCollectionByNameOrId("users")
	if err != nil {
		t.Fatal(err)
	}

	rec := core.NewRecord(collection)

	tmp, err := os.CreateTemp("", "pb_core_test_*.txt")
	if err != nil {
		t.Fatal(err)
	}
	if _, err := tmp.WriteString("hello world"); err != nil {
		t.Fatal(err)
	}
	tmp.Close()
	defer os.Remove(tmp.Name())

	if err := rec.UploadFile("avatar", tmp.Name()); err != nil {
		t.Fatal(err)
	}

	files := rec.GetUnsavedFiles("avatar")
	if len(files) != 1 {
		t.Fatalf("Expected 1 unsaved file, got %d", len(files))
	}

	if files[0].OriginalName != filepath.Base(tmp.Name()) {
		t.Fatalf("Expected file OriginalName %q, got %q", filepath.Base(tmp.Name()), files[0].OriginalName)
	}
}

func TestRecordSetShorthandFile(t *testing.T) {
	app, _ := tests.NewTestApp()
	defer app.Cleanup()

	collection, err := app.FindCachedCollectionByNameOrId("users")
	if err != nil {
		t.Fatal(err)
	}

	rec := core.NewRecord(collection)

	tmp, err := os.CreateTemp("", "pb_core_test_set_*.txt")
	if err != nil {
		t.Fatal(err)
	}
	if _, err := tmp.WriteString("hello set shorthand"); err != nil {
		t.Fatal(err)
	}
	tmp.Close()
	defer os.Remove(tmp.Name())

	// use the shorthand Set which should convert the path to *filesystem.File for file fields
	rec.Set("avatar", tmp.Name())

	files := rec.GetUnsavedFiles("avatar")
	if len(files) != 1 {
		t.Fatalf("Expected 1 unsaved file after Set shorthand, got %d", len(files))
	}

	if files[0].OriginalName != filepath.Base(tmp.Name()) {
		t.Fatalf("Expected file OriginalName %q, got %q", filepath.Base(tmp.Name()), files[0].OriginalName)
	}
}
