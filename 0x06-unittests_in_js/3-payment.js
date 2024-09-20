#!/usr/bin/env node

const Utils = require('./utils');

/**
 * Mimic a request sent to an external API.
 * @param totalAmount {number} - The total cost of the item purchased.
 * @param totalShipping {number} - The cost of shipping the item.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
