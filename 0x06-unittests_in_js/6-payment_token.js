#!/usr/bin/env node

/**
 * Mimic a token response data from an API.
 * @param success {boolean}
 * @returns {Promise<Awaited<{data: string}>>}
 */
// eslint-disable-next-line consistent-return
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
