#!/usr/bin/env node
/* eslint-disable */

const { readDBAsync, csvToJSON } = require('../utils');

/**
 * Reads the database from the specified path and processes the data.
 * @param {string} path - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves to an object where keys are
 * fields of study and values are arrays of student first names.
 * @throws {Error} - If there is an error reading or processing the database.
 */
async function readDatabase(path) {
  try {
    const data = await readDBAsync(path);
    const studentsData = JSON.parse(csvToJSON(data));

    return studentsData.reduce((acc, student) => {
      const { firstname, field } = student;
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      return acc;
    }, {});
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = readDatabase;