/**
 * Filters students by their location.
 *
 * @param {Array<Object>} studentsLists - An array of student objects, each containing a
 * `location` property.
 * @param {string} location - The location to filter students by.
 * @returns {Array<Object>} An array of student objects where the `location` matches the
 * given location.
 */

export default function getStudentsByLocation(studentsLists, location) {
  return (Array.isArray(studentsLists) && typeof location === 'string' && location.trim() !== '')
    ? studentsLists.filter((student) => student.location === location)
    : [];
}
