import getBudgetObject from './7-getBudgetObject';

/**
 * Creates a full budget object with additional methods to format income values.
 * Utilizes the `getBudgetObject` function to create the initial budget object and extends it with
 * methods to convert income values to different formats.
 *
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The GDP per capita value.
 * @returns {Object} An object containing the original budget values with additional methods
 * for formatting income values.
 */

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
