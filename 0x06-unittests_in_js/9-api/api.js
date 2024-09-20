#!/usr/bin/env node

const express = require('express');

const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Handle undefined routes and general 404 page returns
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = app;
