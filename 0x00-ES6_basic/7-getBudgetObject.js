/**
 * Creates a budget object with income, GDP, and GDP per capita
 * using the shorthand property name.
 *
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The GDP per capita value.
 * @returns {Object} An object containing the income, GDP, and GDP per capita.
 */

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
