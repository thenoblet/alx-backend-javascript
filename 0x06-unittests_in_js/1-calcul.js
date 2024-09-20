#!/usr/bin/env node

const Utils = require('./utils');

/**
 * Perform math operations and return the answer.
 * @param type {string} - The type of operation to be perform. Allowed
 * options are 'SUM', 'SUBTRACT', 'DIVIDE'.
 * @param a {number} - The first number.
 * @param b {number} - The second number.
 * @returns {number} The sum of the two numbers rounded up.
 */
function calculateNumber(type, a, b) {
  return Utils.calculateNumber(type, a, b);
}

module.exports = calculateNumber;
