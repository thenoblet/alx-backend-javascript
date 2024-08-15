/**
 * Asynchronously selects the fastest download between China and US servers.
 * @param {Promise<any>} chinaDownload - The download promise from the China server.
 * @param {Promise<any>} USDownload - The download promise from the US server.
 * @returns {Promise<any>} A promise that resolves or rejects with the result of the
 * fastest download.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
