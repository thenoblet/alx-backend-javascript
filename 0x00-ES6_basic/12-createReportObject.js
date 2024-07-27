/**
 * Creates a report object that includes a list of employees and a method to
 * get the number of departments.
 *
 * @param {Object} employeesList - An object where each key is a department name and
 *                                 the value is an array of employee names.
 * @returns {Object} An object with the following properties:
 *   - `allEmployees`: An object containing the original employeesList.
 *   - `getNumberOfDepartments`: A method that returns the number of departments in
 *      the employeesList.
 */

export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: {
      ...employeesList,
    },

    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return employees;
}
