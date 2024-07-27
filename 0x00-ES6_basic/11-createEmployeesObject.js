/**
 * Creates an object where the key is the department name and the value is the list of employees.
 *
 * @param {string} departmentName - The name of the department.
 * @param {Array<string>} employees - An array of employee names in the department.
 * @returns {Object} An object where the key is the departmentName and the value is
 * the employees array.
 */

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
