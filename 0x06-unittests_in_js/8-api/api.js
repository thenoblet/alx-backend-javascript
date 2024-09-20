#!/usr/bin/env node

const express = require('express');

const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = app;
