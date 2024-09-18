#!/usr/bin/env node
/* eslint-disable */

const express = require('express');

const { summarizeStudentInfoByMajor } = require('./utils');

const app = express();
const port = 1245;

const dbFile = process.argv[2];
const studentMajors = ['CS', 'SWE'];

/**
 * Handles GET requests to the root path ('/').
 * 
 * Responds with a plain text message: 'Hello Holberton School!'.
 * 
 * @function
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Handles GET requests to the '/students' path.
 * 
 * Retrieves and responds with student information based on the majors provided.
 * Uses the `summarizeStudentInfoByMajor` function to get the student data.
 * 
 * On success, responds with a list of students and the total number.
 * On failure, responds with a 500 status code and an error message.
 * 
 * @function
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/students', (req, res) => {
  summarizeStudentInfoByMajor(dbFile, studentMajors)
    .then(([studentsInfo, totalNumber]) => {
      res.send('This is the list of our students\n'
        + `Number of students: ${totalNumber}\n`
        + `${studentsInfo}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Cannot load the database');
    });
});

/**
 * Starts the Express server and listens on the specified port.
 * 
 * Logs a message to the console when the server starts listening.
 * 
 * @function
 */
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = app;