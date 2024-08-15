import Currency from './3-currency';

const privateProps = new WeakMap();

/**
 * Represents a Pricing object.
 */
export default class Pricing {
  /**
   * Creates a new Pricing object.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    privateProps.set(this, {
      /**
       * Validates the amount.
       * @param {number} amount - The amount to validate.
       * @throws {TypeError} If the amount is not a number.
       */
      validateAmount: (amount) => {
        if (typeof amount !== 'number') {
          throw new TypeError('Amount must be a number');
        }
      },
      /**
       * Validates the currency.
       * @param {Currency} currency - The currency to validate.
       * @throws {TypeError} If the currency is not an instance of Currency.
       */
      validateCurrency: (currency) => {
        if (!(currency instanceof Currency)) {
          throw new TypeError('Currency must be a Currency');
        }
      },
    });

    privateProps.get(this).validateAmount(amount);
    privateProps.get(this).validateCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} value - The new amount of the pricing.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(value) {
    privateProps.get(this).validateAmount(value);
    this._amount = value;
  }

  /**
   * Gets the currency of the pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the pricing.
   * @param {Currency} value - The new currency of the pricing.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(value) {
    privateProps.get(this).validateCurrency(value);
    this._currency = value;
  }

  /**
   * Displays the full price including the amount and currency.
   * @returns {string} The full price including the amount and currency.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Converts the price using the given conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price.
   * @throws {TypeError} If the amount or conversion rate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }

    throw new TypeError('Amount and conversion rate must be numbers');
  }
}