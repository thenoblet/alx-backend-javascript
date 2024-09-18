/* eslint-disable */

const express = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2); 

const app = express(); // Create an Express application
const DATABASE = args[0]; // The database file path passed as a command-line argument
const PORT = 1245; // Define the port on which the server will run

/**
 * Route handler for the root endpoint ('/').
 *
 * Responds with a simple greeting message: "Hello Holberton School!".
 *
 * @param {express.Request} req - The incoming HTTP request object.
 * @param {express.Response} res - The HTTP response object used to send the response.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Sends a text response to the client
});

/**
 * Route handler for the '/students' endpoint.
 *
 * Responds with the list of students loaded from a CSV file (database).
 * The list is returned as a plain text response. If the database cannot be loaded,
 * an error message is sent back instead.
 *
 * @param {express.Request} req - The incoming HTTP request object.
 * @param {express.Response} res - The HTTP response object used to send the response.
 */
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n'; // Initial message
  try {
    const students = await countStudents(DATABASE); // Await the students list from the file
    res.send(`${msg}${students.join('\n')}`); // Send the student list as response
  } catch (error) {
    res.send(`${msg}${error.message}`); // If error occurs, send the error message
  }
});

/**
 * Starts the Express server and listens on the specified port (1245).
 *
 * Once the server is successfully running, it will be accessible on the defined port.
 */
app.listen(PORT); // Start the server on PORT 1245

module.exports = app; // Export the Express application instance for external use
