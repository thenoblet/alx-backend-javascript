/**
 * Concatenates two arrays and a string into a single array.
 *
 * @param {Array} array1 - The first array.
 * @param {Array} array2 - The second array.
 * @param {string} string - The string to be split and concatenated.
 * @returns {Array} The concatenated array containing elements from both
 *                  arrays and the characters of the string.
 */

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
