/**
 * Uploads a photo with the provided filename.
 *
 * @param {string} filename - The name of the photo file to upload.
 * @returns {Promise<Error>} A promise that rejects with an error indicating
 * the filename cannot be processed.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
