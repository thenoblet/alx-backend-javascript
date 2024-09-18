#!/usr/bin/env node

const readDatabase = require('../utils');

// The path to the database file
const dbFile = 'database.csv';

/**
 * StudentsController class to handle student-related operations.
 */
class StudentsController {
  /**
   * Retrieves all students from the database.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<Object>} - A promise that resolves to the data from the database.
   */
  static async getAllStudents(req, res) {
    return readDatabase(dbFile)
      .then((data) => {
        const sweStudents = data.SWE;
        const computerScienceStudents = data.CS;
        res.status(200).send(
          'This is the list of our students\n'
          + `Number of students in CS: ${computerScienceStudents.length}. `
          + `List: ${computerScienceStudents.join(', ')}\n`
          + `Number of students in SWE: ${sweStudents.length}. `
          + `List: ${sweStudents.join(', ')}\n`,
        );
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  /**
   * Retrieves all students by major from the database.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<Object>} - A promise that resolves to the data for the specified major.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if ((major === undefined) || ((major !== 'CS') && (major !== 'SWE'))) {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(dbFile)
      .then((data) => res.status(200).send(`List: ${data[major].join(', ')}`))
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentsController;