const privateData = new WeakMap();

/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * Creates a new instance of the Currency class.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    privateData.set(this, {
      validateCode(code) {
        if (typeof code !== 'string') {
          throw new TypeError('Code must be a string');
        }
      },
      validateName(name) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
      },
    });

    privateData.get(this).validateCode(code);
    privateData.get(this).validateName(name);

    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} value - The new currency code.
   */
  set code(value) {
    privateData.get(this).validateCode(value);
    this._code = value;
  }

  /**
   * Gets the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} value - The new currency name.
   */
  set name(value) {
    privateData.get(this).validateName(value);
    this._name = value;
  }

  /**
   * Displays the full currency information.
   * @returns {string} The full currency information.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}