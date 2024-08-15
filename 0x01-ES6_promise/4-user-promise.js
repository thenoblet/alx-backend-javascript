/**
 * Signs up a user with the provided first and last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<{firstName: string, lastName: string}>} A promise
 *          that resolves with the user's first and last name.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
