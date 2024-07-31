// 100-weak.js
export const weakMap = new WeakMap();

/**
 * Function to track API queries for endpoints.
 *
 * @param {Object} endpoint - The endpoint object with protocol and name properties.
 * @throws {Error} Throws an error if the number of queries is 5 or more.
 */
export function queryAPI(endpoint) {
  if (!(endpoint && typeof endpoint === 'object')) {
    throw new Error('Invalid endpoint');
  }

  const count = weakMap.get(endpoint) || 0;

  const newCount = count + 1;

  weakMap.set(endpoint, newCount);

  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
