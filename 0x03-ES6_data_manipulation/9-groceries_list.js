/**
 * Returns a Map of grocery items with their quantities.
 *
 * @returns {Map<string, number>} A Map where the keys are grocery item names and
 * the values are their quantities.
 */
export default function groceriesList() {
  const groceries = new Map();

  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
