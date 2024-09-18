#!/usr/bin/env node
/* eslint-disable */

const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 *
 * This function reads a CSV file, processes student data, and groups students by their field (e.g., course or department).
 * It returns a report as a string detailing the total number of students and the number of students in each group.
 *
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<string>} - A promise that resolves with a report on student count or rejects with an error message.
 * @throws Will throw an error if the database file cannot be loaded or does not exist.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // Read the CSV file asynchronously
  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    if (data) {
      // Array to store report lines
      const reportParts = [];
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};

      // Extract field names from the first line of the CSV
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Process each student's record
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx]
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object.values(studentGroups).reduce(
        (pre, cur) => (pre || []).length + cur.length
      );
      reportParts.push(`Number of students: ${totalStudents}`);

      // Generate a report for each field (group)
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
      }

      resolve(reportParts.join('\n')); // Return the report
    }
  });
});

/**
 * List of route handlers for the HTTP server.
 *
 * Each object in the array represents a route and its corresponding handler function.
 * These routes handle different requests and generate the appropriate responses.
 *
 * @type {Array<{route: string, handler: function(http.IncomingMessage, http.ServerResponse): void}>}
 */
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    /**
     * Handles requests to the root ("/") route.
     *
     * Responds with a simple greeting message: "Hello Holberton School!".
     *
     * @param {http.IncomingMessage} req - The incoming HTTP request object.
     * @param {http.ServerResponse} res - The HTTP response object used to send the response.
     */
    handler (_, res) {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    }
  },
  {
    route: '/students',
    /**
     * Handles requests to the "/students" route.
     *
     * Responds with a list of students from the CSV database file. If the file is missing or invalid, an error message is returned.
     *
     * @param {http.IncomingMessage} req - The incoming HTTP request object.
     * @param {http.ServerResponse} res - The HTTP response object used to send the response.
     */
    handler (_, res) {
      const responseParts = ['This is the list of our students'];

      // Call the countStudents function and handle success/error responses
      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    }
  }
];

/**
 * Event listener for the HTTP server 'request' event.
 *
 * This event triggers when the server receives an HTTP request. It matches the request URL to one of the predefined routes and executes the corresponding handler.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request.
 * @param {http.ServerResponse} res - The HTTP response object.
 */
app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

/**
 * Starts the HTTP server on the specified host and port.
 *
 * Listens for requests and logs the server's address when it starts. The server listens on localhost:1245 by default.
 *
 * @listens {http.Server}
 */
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;