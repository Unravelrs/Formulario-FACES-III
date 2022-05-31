/** @module */

const memoryCache = require("memory-cache");

/** */
exports.get = key => {
    return memoryCache.get(key);
};

/** */
exports.set = (key, o) => {
    return memoryCache.put(key, o);
};
