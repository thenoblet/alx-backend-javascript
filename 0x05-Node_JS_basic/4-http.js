#!/usr/bin/env node

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Creates an HTTP server that responds with a plain text message.
 *
 * The server listens for requests on the specified hostname and port.
 * When a request is received, the server responds with the message "Hello Holberton School!".
 *
 * @constant {string} hostname - The hostname where the server will listen.
 * @constant {number} port - The port where the server will listen.
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
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
