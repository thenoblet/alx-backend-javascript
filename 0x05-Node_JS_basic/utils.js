#!/usr/bin/env node

// Utility functions

const fs = require('fs');

/**
 * Converts a CSV string to a JSON string.
 *
 * @param {string} csv - The CSV string to convert.
 * @returns {string} - The resulting JSON string.
 */
function csvToJSON(csv) {
  const lines = csv.trim().split('\n');
  const result = [];
  const headers = lines[0].split(',');

  lines.slice(1).forEach((line) => {
    if (line.trim() === '') return; // Skip empty lines
    const obj = {};
    const currentLine = line.split(',');

    headers.forEach((header, index) => {
      obj[header] = currentLine[index];
    });
    result.push(obj);
  });

  return JSON.stringify(result);
}

/**
 * Return the number of students in a specific field and their names.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} field - The field to filter students by.
 * @returns {string} The number of students in a specific field and their names.
 */
function getStudentsInfo(students, field) {
  const filteredStudents = students.filter(
    (student) => student.field === field,
  );

  return (
    `Number of students in ${field}: ${filteredStudents.length}. `
    + `List: ${filteredStudents.map(
      (student) => student.firstname,
    ).join(', ')}`
  );
}

/**
 * Synchronously reads the contents of a database file from the specified path.
 *
 * This function attempts to read the file at the given path using UTF-8
 * encoding.
 * If successful, it returns the contents of the file as a string.
 * If there is an error during the file reading process
 * (e.g., the file does not exist or cannot be accessed), it throws an error
 * with a descriptive message.
 *
 * @param {string} path - The file system path to the database file that
 *                          needs to be read.
 * @returns {string} The contents of the database file as a UTF-8 encoded string.
 * @throws {Error} Throws an error if the file cannot be loaded, providing a
 *                  message indicating the failure reason.
 */
function readDBSync(path) {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

/**
 * Asynchronously reads the contents of a database file from the specified path.
 *
 * This function attempts to read the file at the given path using UTF-8
 * encoding. If successful, it returns the contents of the file as a string.
 * If there is an error during the file reading process (e.g., the file does
 * not exist or cannot be accessed), it throws an error with a descriptive
 * message.
 *
 * @param {string} path - The file system path to the database file that
 *                        needs to be read.
 * @returns {Promise<string>} A promise that resolves to the contents of
 *                            the database file as a UTF-8 encoded string.
 * @throws {Error} Throws an error if the file cannot be loaded, providing
 *                 a message indicating the failure reason.
 */
async function readDBAsync(path) {
  try {
    return await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

/**
 * Summarizes student information based on their majors from a CSV file.
 *
 * This function reads a CSV file, converts it to JSON, and then gathers
 * information about students for the specified majors. It returns a
 * summary of the students' information and the total number of students
 * found in the dataset.
 *
 * @async
 * @function summarizeStudentInfoByMajor
 * @param {string} path - The file path to the CSV file containing student data.
 * @param {Array<string>} studentMajors - An array of strings representing
 * the majors for which to summarize student information.
 * @returns {Promise<Array<string>>} A promise that resolves to an array containing:
 * - A string with summarized student information for the specified majors,
 *  joined by newlines.
 * - The total number of students found in the dataset.
 *
 * @throws {Error} Throws an error if there is an issue reading the
 * file or parsing the data.
 */
async function summarizeStudentInfoByMajor(path, studentMajors) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  // Gather the student summary based on their major.
  const studentsInfo = studentMajors.map((major) => getStudentsInfo(studentsData, major));

  // Let's return the summarized data and the number of students found.
  return [studentsInfo.join('\n'), studentsData.length];
}

module.exports = {
  csvToJSON,
  getStudentsInfo,
  readDBSync,
  readDBAsync,
  summarizeStudentInfoByMajor,
};