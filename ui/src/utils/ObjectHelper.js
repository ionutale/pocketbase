/**
 * Object and data manipulation utilities
 */
export default class ObjectHelper {
    /**
     * Checks whether value is plain object.
     *
     * @param  {Mixed} value
     * @return {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === "object" && value.constructor === Object;
    }

    /**
     * Deep clones the provided value.
     *
     * @param  {Mixed} val
     * @return {Mixed}
     */
    static clone(value) {
        return typeof structuredClone !== "undefined" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
    }

    /**
     * Returns the zero/empty value of val (only primitive values are supported).
     * @param  {Mixed} val
     * @return {Mixed}
     */
    static zeroValue(val) {
        switch (typeof val) {
            case "string":
                return "";
            case "number":
                return 0;
            case "boolean":
                return false;
            case "object":
                if (val === null) {
                    return null;
                }

                if (Array.isArray(val)) {
                    return [];
                }

                return {};
            case "undefined":
                return undefined;
            default:
                return null;
        }
    }

    /**
     * Checks whether `value` is empty or not (null, undefined, empty string, empty array, empty object, zero number, false bool).
     *
     * @param  {Mixed} value
     * @return {Boolean}
     */
    static isEmpty(value) {
        if (value === null || typeof value === "undefined") {
            return true;
        }

        if (typeof value === "string" || Array.isArray(value)) {
            return value.length === 0;
        }

        if (ObjectHelper.isObject(value)) {
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

    /**
     * Check if `obj` has at least one none empty property.
     *
     * @param  {Object} obj
     * @return {Boolean}
     */
    static hasNonEmptyProps(obj) {
        for (let i in obj) {
            if (!ObjectHelper.isEmpty(obj[i])) {
                return true;
            }
        }

        return false;
    }

    /**
     * Filters and returns a new object with removed redacted props.
     *
     * @param  {Object} obj
     * @param  {String} [mask] Default to '******'
     * @return {Object}
     */
    static filterRedactedProps(obj, mask = "******") {
        const result = {};

        for (let key in obj) {
            if (obj[key] !== mask) {
                result[key] = obj[key];
            }
        }

        return result;
    }

    /**
     * Returns a deep nested value from the provided object/array.
     *
     * @param  {Object|Array} data
     * @param  {String}       path
     * @param  {Mixed}        [defaultVal]
     * @param  {String}       [delimiter]
     * @return {Mixed}
     */
    static getNestedVal(data, path, defaultVal = null, delimiter = ".") {
        if (!path || !ObjectHelper.isObject(data) && !Array.isArray(data)) {
            return defaultVal;
        }

        let result = data;
        let keys = path.split(delimiter);

        for (const key of keys) {
            if (result === null || typeof result === "undefined" || typeof result[key] === "undefined") {
                return defaultVal;
            }

            result = result[key];
        }

        return result;
    }

    /**
     * Sets a nested value in the provided object.
     *
     * @param {Object|Array} data
     * @param {String}       path
     * @param {Mixed}        newValue
     * @param {String}       [delimiter]
     */
    static setByPath(data, path, newValue, delimiter = ".") {
        if (!path || (!ObjectHelper.isObject(data) && !Array.isArray(data))) {
            return;
        }

        let keys = path.split(delimiter);
        let current = data;

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            if (i === keys.length - 1) {
                // last key
                current[key] = newValue;
            } else {
                if (!ObjectHelper.isObject(current[key]) && !Array.isArray(current[key])) {
                    current[key] = {};
                }

                current = current[key];
            }
        }
    }

    /**
     * Deletes a nested property from the provided object by its path.
     *
     * @param {Object|Array} data
     * @param {String}       path
     * @param {String}       [delimiter]
     */
    static deleteByPath(data, path, delimiter = ".") {
        if (!path || (!ObjectHelper.isObject(data) && !Array.isArray(data))) {
            return;
        }

        let keys = path.split(delimiter);
        let current = data;

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            if (i === keys.length - 1) {
                // last key
                if (Array.isArray(current)) {
                    current.splice(key, 1);
                } else if (ObjectHelper.isObject(current)) {
                    delete current[key];
                }
            } else {
                if (!ObjectHelper.isObject(current[key]) && !Array.isArray(current[key])) {
                    return; // path doesn't exist
                }

                current = current[key];
            }
        }
    }

    /**
     * Removes all children objects from an object or an array.
     * If the provided data is not an object or an array, the method does nothing.
     *
     * @param {Object|Array} data
     * @param {Number}       [maxDepth]
     */
    static truncateObject(data, maxDepth = 2) {
        if (maxDepth <= 0) {
            return;
        }

        if (Array.isArray(data)) {
            for (let i = data.length - 1; i >= 0; i--) {
                if (Array.isArray(data[i]) || ObjectHelper.isObject(data[i])) {
                    ObjectHelper.truncateObject(data[i], maxDepth - 1);
                }
            }
        } else if (ObjectHelper.isObject(data)) {
            for (let key in data) {
                if (Array.isArray(data[key]) || ObjectHelper.isObject(data[key])) {
                    ObjectHelper.truncateObject(data[key], maxDepth - 1);
                }
            }
        }
    }
}