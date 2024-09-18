#!/usr/bin/env node

const express = require('express');

const app = express();
const port = 1245;

app.use((req, res, next) => {
  res.set('Content-Type', 'text/plain');
  next();
});

const endpoints = require('./routes/index');

app.use('/', endpoints);
app.use('/students', endpoints);
app.use('/students/:major', endpoints);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;