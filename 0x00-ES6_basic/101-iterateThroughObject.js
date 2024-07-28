/**
 * Iterates through an iterable object containing employees and returns a string
 * with all employee names joined by " | ".
 *
 * @param {Object} reportWithIterator - An iterable object containing employee names.
 * @returns {string} A string of employee names joined by " | ".
 */

export default function iterateThroughObject(reportWithIterator) {
  return Array.from(reportWithIterator).join(' | ');
}
