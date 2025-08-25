/**
 * Array manipulation utilities
 */
export default class ArrayHelper {
    /**
     * Normalizes and returns arr as a new array instance.
     *
     * @param  {Array}   arr
     * @param  {Boolean} [allowEmpty]
     * @return {Array}
     */
    static toArray(arr, allowEmpty = false) {
        if (Array.isArray(arr)) {
            return arr.slice();
        }

        return (allowEmpty || !this.isEmpty(arr)) && typeof arr !== "undefined" ? [arr] : [];
    }

    /**
     * Loosely checks if value exists in an array.
     *
     * @param  {Array} arr
     * @param  {Mixed} value
     * @return {Boolean}
     */
    static inArray(arr, value) {
        if (!Array.isArray(arr)) {
            return false;
        }

        // use array find helper
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == value) {
                return true;
            }
        }

        return false;
    }

    /**
     * Removes single element from array (without mutating the original array).
     *
     * @param  {Array} arr
     * @param  {Mixed} value
     * @return {Array}
     */
    static removeByValue(arr, value) {
        if (!Array.isArray(arr)) {
            return [];
        }

        let result = arr.slice();

        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i] == value) {
                result.splice(i, 1);
                break;
            }
        }

        return result;
    }

    /**
     * Adds `value` in the provided array only if it's not already present.
     *
     * @param {Array} arr
     * @param {Mixed} value
     */
    static pushUnique(arr, value) {
        if (!Array.isArray(arr) || ArrayHelper.inArray(arr, value)) {
            return;
        }

        arr.push(value);
    }

    /**
     * Merges `values` with the provided array and returns a new array with unique values.
     *
     * @param  {Array} targetArr
     * @param  {Array} valuesArr
     * @return {Array}
     */
    static mergeUnique(targetArr, valuesArr) {
        const result = Array.isArray(targetArr) ? targetArr.slice() : [];

        if (Array.isArray(valuesArr)) {
            for (const val of valuesArr) {
                ArrayHelper.pushUnique(result, val);
            }
        }

        return result;
    }

    /**
     * Returns single element from objects array by matching its key value.
     *
     * @param  {Array}  objectsArr
     * @param  {String} key
     * @param  {Mixed}  value
     * @return {Object}
     */
    static findByKey(objectsArr, key, value) {
        if (!Array.isArray(objectsArr)) {
            return null;
        }

        for (let i = objectsArr.length - 1; i >= 0; i--) {
            if (objectsArr[i][key] == value) {
                return objectsArr[i];
            }
        }

        return null;
    }

    /**
     * Groups objects array by a specific key.
     *
     * @param  {Array}  objectsArr
     * @param  {String} key
     * @return {Object}
     */
    static groupByKey(objectsArr, key) {
        const result = {};

        if (!Array.isArray(objectsArr)) {
            return result;
        }

        for (const item of objectsArr) {
            const group = item[key] || "_default_";

            if (!Array.isArray(result[group])) {
                result[group] = [];
            }

            result[group].push(item);
        }

        return result;
    }

    /**
     * Removes all objects from an array by matching an object key value.
     *
     * @param {Array}  objectsArr
     * @param {String} key
     * @param {Mixed}  value
     */
    static removeByKey(objectsArr, key, value) {
        if (!Array.isArray(objectsArr)) {
            return;
        }

        for (let i = objectsArr.length - 1; i >= 0; i--) {
            if (objectsArr[i][key] == value) {
                objectsArr.splice(i, 1);
            }
        }
    }

    /**
     * Adds or replace an object array element by comparing its key value.
     *
     * @param {Array}  objectsArr
     * @param {Object} item
     * @param {Mixed}  [key]
     */
    static pushOrReplaceByKey(objectsArr, item, key = "id") {
        if (!Array.isArray(objectsArr)) {
            return;
        }

        for (let i = objectsArr.length - 1; i >= 0; i--) {
            if (objectsArr[i][key] == item[key]) {
                objectsArr[i] = item; // replace
                return;
            }
        }

        objectsArr.push(item); // add
    }

    /**
     * Filters and returns a new objects array with duplicated elements removed.
     *
     * @param  {Array} objectsArr
     * @param  {String} key
     * @return {Array}
     */
    static filterDuplicatesByKey(objectsArr, key = "id") {
        if (!Array.isArray(objectsArr)) {
            return [];
        }

        const result = [];
        const existingKeys = [];

        for (const item of objectsArr) {
            if (ArrayHelper.inArray(existingKeys, item[key])) {
                continue; // skip
            }

            existingKeys.push(item[key]);
            result.push(item);
        }

        return result;
    }

    // Helper method - needs to be implemented to work standalone
    static isEmpty(value) {
        if (value === null || typeof value === "undefined") {
            return true;
        }

        if (typeof value === "string" || Array.isArray(value)) {
            return value.length === 0;
        }

        if (value !== null && typeof value === "object" && value.constructor === Object) {
            return Object.keys(value).length === 0;
        }

        if (typeof value === "number") {
            return value === 0;
        }

        if (typeof value === "boolean") {
            return !value;
        }

        return false;
    }
}