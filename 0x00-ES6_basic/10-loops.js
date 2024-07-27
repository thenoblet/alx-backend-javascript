/**
 * Appends a specified string to each element of the given array.
 *
 * @param {Array<string>} array - The array of strings to which the appendString will be added.
 * @param {string} appendString - The string to append to each element in the array.
 * @returns {Array<string>} A new array with the appendString added to each element of
 * the original array.
 */

export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const element of array) {
    newArray.push(appendString + element);
  }

  return newArray;
}
