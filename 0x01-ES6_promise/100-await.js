import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user, returning the photo and user information.
 * @returns {Promise<Object>} - A promise that resolves to an object with
 * photo and user information or null values.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
