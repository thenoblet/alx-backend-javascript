/**
 * Returns a list of student objects.
 *
 * @returns {Array<Object>} An array of student objects, each containing `id`, `firstName`, and `location` properties.
 */

function getListStudents() {
  const studentsList = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return studentsList;
}