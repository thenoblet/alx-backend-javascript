#!/usr/bin/env node

const fs = require('fs').promises;

/**
 * Reads a CSV file from the given path and counts students by their field of study.
 *
 * The CSV file is expected to have a header line followed by lines of student data.
 * Each student data line is assumed to be in the format: firstname, lastname, age, field.
 *
 * @param {string} path - The path to the CSV file to read.
 * @returns {Promise<void>} A promise that resolves when the counting is complete or
 * rejects if an error occurs.
 * @throws {Error} Throws an error if the file cannot be read or processed.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        for (const [field, studentList] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
