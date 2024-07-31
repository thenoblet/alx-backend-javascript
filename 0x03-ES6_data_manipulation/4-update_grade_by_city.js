/**
 * Updates the grade of students by city.
 *
 * @param {Array<Object>} studentsList - An array of student objects, each containing `id`
 *                                       and `location` properties.
 * @param {string} city - The city to filter students by.
 * @param {Array<Object>} newGrades - An array of objects containing `studentId` and
 *                                    `grade` properties.
 * @returns {Array<Object>} An array of student objects with updated grades.
 * @throws {TypeError} If `studentsList` is not an array.
 * @throws {TypeError} If `city` is not a string.
 * @throws {TypeError} If `newGrades` is not an array.
 */

export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)) {
    throw new TypeError('studentsList must be an array');
  }

  if (typeof city !== 'string') {
    throw new TypeError('City must be a string');
  }

  if (!Array.isArray(newGrades)) {
    throw new TypeError('newGrades must be an array');
  }

  return studentsList
    .filter((students) => students.location === city)
    .map((student) => {
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
