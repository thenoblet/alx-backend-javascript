#!/usr/bin/env node

const express = require('express');

const app = express();
const port = 1245;

// Endpoint for index page
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = app;
