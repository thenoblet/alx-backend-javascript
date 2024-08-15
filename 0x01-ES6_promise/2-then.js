/**
 * Attaches handlers to a given promise to handle resolution, rejection, and logging.
 *
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} A promise that resolves with an object {status: 200, body: 'success'}
 *                    if the input promise resolves, or with an empty Error object if it rejects.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
