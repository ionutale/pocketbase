# PocketBase UI Helper Utilities

This directory contains modular utility helper classes that provide common functionality used throughout the PocketBase UI.

## Overview

These utilities were extracted from a large monolithic `CommonHelper.js` file to improve maintainability, testability, and code organization.

## Modules

### `ObjectHelper.js`
Provides utilities for object manipulation and validation.

**Key Methods:**
- `isObject(value)` - Check if value is a plain object
- `clone(value)` - Deep clone any value
- `isEmpty(value)` - Check if value is empty (null, undefined, empty string/array/object, etc.)
- `getNestedVal(data, path, defaultVal)` - Get nested property value using dot notation
- `setByPath(data, path, newValue)` - Set nested property value using dot notation
- `deleteByPath(data, path)` - Delete nested property using dot notation
- `hasNonEmptyProps(obj)` - Check if object has any non-empty properties
- `filterRedactedProps(obj, mask)` - Remove redacted properties from object

### `ArrayHelper.js`
Provides utilities for array manipulation and object array operations.

**Key Methods:**
- `toArray(arr, allowEmpty)` - Convert value to array
- `inArray(arr, value)` - Check if value exists in array (loose comparison)
- `removeByValue(arr, value)` - Remove first matching value from array
- `pushUnique(arr, value)` - Add value only if not already present
- `findByKey(objectsArr, key, value)` - Find object in array by property value
- `groupByKey(objectsArr, key)` - Group objects array by property value
- `removeByKey(objectsArr, key, value)` - Remove all objects matching property value
- `pushOrReplaceByKey(objectsArr, item, key)` - Add or replace object by key
- `filterDuplicatesByKey(objectsArr, key)` - Remove duplicate objects by key

### `StringHelper.js`
Provides utilities for string processing and formatting.

**Key Methods:**
- `sentenize(str, stopCheck)` - Convert string to sentence format (optimized performance)
- `trimQuotedValue(val)` - Remove surrounding quotes from string
- `plainText(str)` - Strip HTML tags from string
- `escapeRegExp(str)` - Escape string for use in regular expressions
- `joinNonEmpty(items, separator, escapeSeparator)` - Join non-empty values
- `getInitials(str)` - Extract initials from name/email
- `randomString(length)` - Generate random alphanumeric string
- `randomSecret(length)` - Generate random secret string
- `slugify(str)` - Convert string to URL-friendly slug
- `splitNonEmpty(str, separator)` - Split string and filter empty parts
- `truncate(str, maxLength, suffix)` - Truncate string with suffix

## Usage

```javascript
// Direct import of specific helper
import ObjectHelper from './utils/ObjectHelper.js';
import ArrayHelper from './utils/ArrayHelper.js';
import StringHelper from './utils/StringHelper.js';

// Use the helpers directly
const cloned = ObjectHelper.clone(originalObject);
const found = ArrayHelper.findByKey(items, 'id', 123);
const sentence = StringHelper.sentenize('hello_world');

// Or continue using CommonHelper (which delegates to the above)
import CommonHelper from './utils/CommonHelper.js';
const cloned = CommonHelper.clone(originalObject);
```

## Backward Compatibility

The original `CommonHelper` class remains fully functional and continues to export all the same static methods. It now delegates to the specialized helper classes internally, providing the same API while benefiting from the improved organization.

## Performance Notes

- `StringHelper.sentenize()` has been optimized to use array joining instead of string concatenation for better performance
- Object helpers use modern `structuredClone` when available, falling back to JSON parse/stringify
- Array operations are optimized for the common use cases in PocketBase

## Testing

These utilities can be tested by importing them directly or through the CommonHelper class. All existing tests should continue to pass without modification due to the maintained API compatibility.

## Future Improvements

1. Add comprehensive unit test suite for each helper module
2. Consider TypeScript definitions for better IDE support
3. Add performance benchmarks for critical operations
4. Consider further modularization based on usage patterns