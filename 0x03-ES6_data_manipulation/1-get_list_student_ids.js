/**
 * Extracts the IDs of students from a list of student objects.
 *
 * @param {Array<Object>} studentList - An array of student objects, each containing
 * an `id` property.
 * @returns {Array<number>} An array of student IDs.
 */

export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map((student) => student.id);
}
