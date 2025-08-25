/**
 * String manipulation and formatting utilities
 */
export default class StringHelper {
    /**
     * Converts and normalizes string into a sentence.
     * Optimized version using array join for better performance.
     *
     * @param  {String}  str
     * @param  {Boolean} [stopCheck]
     * @return {String}
     */
    static sentenize(str, stopCheck = true) {
        if (typeof str !== "string") {
            return "";
        }

        str = str.trim().split("_").join(" ");
        if (str === "") {
            return str;
        }

        str = str[0].toUpperCase() + str.substring(1);

        if (stopCheck) {
            let lastChar = str[str.length - 1];
            if (lastChar !== "." && lastChar !== "?" && lastChar !== "!") {
                str += ".";
            }
        }

        return str;
    }

    /**
     * Trims the matching quotes from the provided value.
     *
     * The value will be returned unchanged if `val` is not
     * wrapped with quotes or it is not string.
     *
     * @param  {Mixed} val
     * @return {Mixed}
     */
    static trimQuotedValue(val) {
        if (typeof val !== "string" || val.length < 2) {
            return val;
        }

        if ((val[0] === '"' && val[val.length - 1] === '"') ||
            (val[0] === "'" && val[val.length - 1] === "'")) {
            return val.substring(1, val.length - 1);
        }

        return val;
    }

    /**
     * Returns the plain text version (aka. strip tags) of the provided string.
     *
     * @param  {String} str
     * @return {String}
     */
    static plainText(str) {
        return typeof str === "string" ? str.replace(/<[^>]*>/g, "").trim() : "";
    }

    /**
     * Escapes a string for use within a regular expression.
     *
     * @param  {String} str
     * @return {String}
     */
    static escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    /**
     * Returns concatenated and escaped non empty values.
     *
     * @param  {Array}   items
     * @param  {String}  [separator]
     * @param  {Boolean} [escapeSeparator]
     * @return {String}
     */
    static joinNonEmpty(items, separator = ", ", escapeSeparator = true) {
        const result = [];

        for (const item of items) {
            if (!StringHelper.isEmpty(item)) {
                const stringified = StringHelper.stringifyValue(item);
                if (stringified !== "") {
                    if (escapeSeparator) {
                        result.push(stringified.replace(new RegExp(StringHelper.escapeRegExp(separator), "g"), "\\" + separator));
                    } else {
                        result.push(stringified);
                    }
                }
            }
        }

        return result.join(separator);
    }

    /**
     * Extract the user initials from the provided username or email address
     * (eg. converts "john.doe@example.com" to "JD").
     *
     * @param  {String} str
     * @return {String}
     */
    static getInitials(str) {
        str = str || "";

        const words = str.replace(/[@\.]/g, " ").split(" ");

        let result = "";
        for (const word of words) {
            if (word.length > 0) {
                result += word[0].toUpperCase();
            }
        }

        return result;
    }

    /**
     * Generates and returns a random string.
     *
     * @param  {Number} [length]
     * @return {String}
     */
    static randomString(length = 10) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Generates and returns a random secret string.
     *
     * @param  {Number} [length]
     * @return {String}
     */
    static randomSecret(length = 15) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Converts a string to a URL friendly slug.
     *
     * @param  {String} str
     * @return {String}
     */
    static slugify(str) {
        return String(str)
            .normalize("NFKD") // split accented characters into their base characters and diacritical marks
            .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
            .trim() // trim leading or trailing whitespace
            .toLowerCase() // convert to lowercase
            .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
            .replace(/\s+/g, "-") // replace spaces with hyphens
            .replace(/-+/g, "-"); // remove consecutive hyphens
    }

    /**
     * Splits the provided string and returns only the non-empty parts.
     *
     * @param  {String} str
     * @param  {String} [separator]
     * @return {Array}
     */
    static splitNonEmpty(str, separator = ",") {
        if (!str) {
            return [];
        }

        const parts = str.split(separator);
        const result = [];

        for (const part of parts) {
            const trimmed = part.trim();
            if (trimmed !== "") {
                result.push(trimmed);
            }
        }

        return result;
    }

    /**
     * Converts the provided string value to its string literal representation.
     *
     * @param  {Mixed} value
     * @return {String}
     */
    static stringifyValue(value) {
        if (typeof value === "string") {
            return value;
        }

        if (value === null || typeof value === "undefined") {
            return "";
        }

        return String(value);
    }

    /**
     * Truncates the provided string to specified length.
     *
     * @param  {String} str
     * @param  {Number} [maxLength]
     * @param  {String} [suffix]
     * @return {String}
     */
    static truncate(str, maxLength = 255, suffix = "...") {
        str = StringHelper.stringifyValue(str);

        if (str.length <= maxLength) {
            return str;
        }

        return str.substring(0, maxLength - suffix.length) + suffix;
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