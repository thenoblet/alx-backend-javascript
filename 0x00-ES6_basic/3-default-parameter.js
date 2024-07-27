/**
 * Calculates the sum of the initial number and two expansion values.
 *
 * @param {number} initialNumber - The initial number to start with.
 * @param {number} [expansion1989=89] - The expansion value for the year 1989. Defaults to 89.
 * @param {number} [expansion2019=19] - The expansion value for the year 2019. Defaults to 19.
 * @returns {number} The sum of the initial number and the two expansion values.
 */

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
