/**
 * Returns a string of all the set values that start with a specific string.
 * The result string should include only the part of the value after the startString,
 * and values should be joined by a hyphen.
 *
 * @param {Set} set - The Set to filter.
 * @param {String} startString - The string to check if the Set values start with.
 * @returns {String} - A string of all the values that start with startString, joined by hyphens.
 */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || startString.length === 0) {
    return '';
  }

  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
