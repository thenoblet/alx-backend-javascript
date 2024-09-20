#!/usr/bin/env node

const Utils = require('./utils');

/**
 * Return the integer sum of two numbers.
 * @param a {number} - The first number.
 * @param b {number} - The second number.
 * @returns {number} The sum of the two numbers rounded up.
 */
function calculateNumber(a, b) {
  return Utils.calculateNumber('SUM', a, b);
}

module.exports = calculateNumber;
