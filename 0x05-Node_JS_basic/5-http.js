#!/usr/bin/env node
/* eslint-disable */

const http = require('http');
const { summarizeStudentInfoByMajor } = require('./utils');

const dbFile = process.argv[2];
const majors = ['CS', 'SWE'];

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Creates an HTTP server that responds with student information based on the request URL.
 *
 * - On root path ('/'), responds with a welcome message.
 * - On '/students', retrieves and displays student information by major using the
 * `summarizeStudentInfoByMajor` function.
 * - Handles errors and unknown paths with appropriate HTTP status codes.
 *
 * @constant {string} dbFile - The path to the database file, provided as a command-line argument.
 * @constant {Array<string>} majors - The list of majors to filter students by.
 * @constant {string} hostname - The hostname where the server will listen.
 * @constant {number} port - The port where the server will listen.
 */
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
	  res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
	  summarizeStudentInfoByMajor(dbFile, majors)
      .then(([studentsInfo, totalNumber]) => {
		  res.write('This is the list of our students\n');
		  res.write(`Number of students: ${totalNumber}\n`);
		  res.end(studentsInfo);
      })
      .catch(() => {
		  res.statusCode = 500;
		  res.end('Internal Server Error');
      });
  } else {
	  res.statusCode = 404;
	  res.end('Not Found');
  }
});

/**
 * Starts the HTTP server and logs the server address to the console.
 *
 * @function
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
