#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads a CSV file from the given path and counts students by their field of study.
 *
 * The CSV file is expected to have a header line followed by lines of student data.
 * Each student data line is assumed to be in the format: firstname, lastname, age, field.
 *
 * @param {string} path - The path to the CSV file to read.
 * @throws {Error} Throws an error if the file cannot be read or processed.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

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

    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
