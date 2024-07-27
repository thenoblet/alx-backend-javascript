/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...*} rest - The arguments passed to the function.
 * @returns {number} The number of arguments passed.
 */

export default function returnHowManyArguments(...rest) {
  return rest.length;
}
