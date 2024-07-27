/**
 * Returns the current year.
 *
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Creates a budget object for the current year with income, GDP, and GDP per capita.
 * The property names include the current year.
 *
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The GDP per capita value.
 * @returns {Object} An object containing the income, GDP, and GDP per capita for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
