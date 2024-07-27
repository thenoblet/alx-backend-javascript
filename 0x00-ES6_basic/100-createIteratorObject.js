/**
 * Creates an iterator object for iterating over all employees in the report.
 *
 * @param {Object} report - An object containing employee data, with a property `allEmployees`
 * that holds department names as keys and arrays of employee names as values.
 * @returns {Object} An iterable object that can be used to iterate over all employees.
 */

export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();

  const iterable = {
    * [Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee;
      }
    },
  };

  return iterable;
}
