/**
 * Cache Utility Module
 * Provides localStorage-based caching for app data
 *
 * JavaScript Concepts Used:
 * - Modules (import/export)
 * - JSON parsing/stringifying
 * - localStorage API
 * - Error handling with try-catch
 * - Date/time operations
 */

const CACHE_PREFIX = 'plant_app_';
const DEFAULT_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Generates a cache key with prefix
 * @param {string} key - The base key name
 * @returns {string} The prefixed cache key
 */
const getCacheKey = (key) => `${CACHE_PREFIX}${key}`;

/**
 * Saves data to localStorage with expiry
 * @param {string} key - The cache key
 * @param {*} data - The data to store (will be JSON stringified)
 * @param {number} expiryMs - Expiry time in milliseconds (default: 24 hours)
 */
export const setCache = (key, data, expiryMs = DEFAULT_EXPIRY) => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
      expiry: expiryMs
    };
    localStorage.setItem(getCacheKey(key), JSON.stringify(cacheData));
    console.log(`[Cache] Saved: ${key}`);
  } catch (error) {
    console.error(`[Cache] Error saving ${key}:`, error);
  }
};

/**
 * Retrieves data from localStorage if not expired
 * @param {string} key - The cache key
 * @returns {*} The cached data or null if expired/not found
 */
export const getCache = (key) => {
  try {
    const cached = localStorage.getItem(getCacheKey(key));
    if (!cached) {
      console.log(`[Cache] Miss: ${key} (not found)`);
      return null;
    }

    const { data, timestamp, expiry } = JSON.parse(cached);
    const age = Date.now() - timestamp;

    if (age > expiry) {
      console.log(`[Cache] Miss: ${key} (expired)`);
      localStorage.removeItem(getCacheKey(key));
      return null;
    }

    console.log(`[Cache] Hit: ${key} (age: ${Math.round(age/1000)}s)`);
    return data;
  } catch (error) {
    console.error(`[Cache] Error reading ${key}:`, error);
    return null;
  }
};

/**
 * Removes a specific cache entry
 * @param {string} key - The cache key to remove
 */
export const removeCache = (key) => {
  try {
    localStorage.removeItem(getCacheKey(key));
    console.log(`[Cache] Removed: ${key}`);
  } catch (error) {
    console.error(`[Cache] Error removing ${key}:`, error);
  }
};

/**
 * Clears all cache entries for this app
 */
export const clearAllCache = () => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    console.log('[Cache] All cache cleared');
  } catch (error) {
    console.error('[Cache] Error clearing cache:', error);
  }
};

/**
 * Gets cache statistics
 * @returns {Object} Cache stats including size and entry count
 */
export const getCacheStats = () => {
  try {
    const keys = Object.keys(localStorage);
    const appKeys = keys.filter(key => key.startsWith(CACHE_PREFIX));
    let totalSize = 0;
    const entries = [];

    appKeys.forEach(key => {
      const value = localStorage.getItem(key);
      totalSize += value.length;
      const data = JSON.parse(value);
      entries.push({
        key: key.replace(CACHE_PREFIX, ''),
        age: Math.round((Date.now() - data.timestamp) / 1000),
        expired: (Date.now() - data.timestamp) > data.expiry
      });
    });

    return {
      count: appKeys.length,
      size: totalSize,
      sizeFormatted: `${(totalSize / 1024).toFixed(2)} KB`,
      entries
    };
  } catch (error) {
    console.error('[Cache] Error getting stats:', error);
    return { count: 0, size: 0, sizeFormatted: '0 KB', entries: [] };
  }
};

// Cache keys for different data types
export const CACHE_KEYS = {
  QUIZ_RESULTS: 'quiz_results',
  FORM_DATA: 'form_data',
  FEEDBACK_SUBMITTED: 'feedback_submitted',
  VISIT_COUNT: 'visit_count',
  LAST_VISIT: 'last_visit'
};
