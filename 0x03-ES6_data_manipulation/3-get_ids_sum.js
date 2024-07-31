/**
 * Calculates the sum of all student IDs in the given list of students.
 *
 * @param {Array<Object>} studentsList - An array of student objects, each containing
 * an `id` property.
 * @returns {number} The sum of all student IDs.
 * @throws {Error} If `studentsList` is not an array.
 */

export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    throw new Error('studentsList must be an array');
  }

  return studentsList.reduce((accumulator, student) => accumulator + student.id, 0);
}
