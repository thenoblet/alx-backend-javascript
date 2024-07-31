/**
 * Updates the quantity of items in the map where the initial quantity is 1 to 100.
 *
 * @param {Map<string, number>} map - A Map where keys are item names and values are quantities.
 * @returns {Map<string, number>} The updated Map with quantities adjusted as per the criteria.
 * @throws {Error} Throws an error if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('The provided argument is not a valid Map.');
  }

  // Iterate over the map and update quantities
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
