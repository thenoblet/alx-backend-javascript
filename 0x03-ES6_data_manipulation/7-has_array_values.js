/**
 * Checks if all elements in the array are present in the set.
 *
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The Array of elements to check.
 * @returns {boolean} - True if all elements are present in the Set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
