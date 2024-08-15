const privateProps = new WeakMap();

const util = require('util');

const validators = {
  validateName: (name) => {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
  },
  validateCode: (code) => {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
  },
};

/**
 * Represents an Airport.
 */
export default class Airport {
  /**
   * Creates an instance of Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    privateProps.set(this, validators);

    privateProps.get(this).validateName(name);
    privateProps.get(this).validateCode(code);

    this._name = name;
    this._code = code;
  }

  /**
   * Get the name of the airport.
   * @returns {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the airport.
   * @param {string} value - The new name of the airport.
   */
  set name(value) {
    privateProps.get(this).validateName(value);
    this._name = value;
  }

  /**
   * Get the code of the airport.
   * @returns {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code of the airport.
   * @param {string} value - The new code of the airport.
   */
  set code(value) {
    privateProps.get(this).validateCode(value);
    this._code = value;
  }

  /**
   * Returns a string representation of the airport.
   * @returns {string} The string representation of the airport.
   */
  toString() {
    return `[object ${this._code}]`;
  }

  /**
   * Returns a custom string representation of the airport.
   * @returns {string} The custom string representation of the airport.
   */
  [util.inspect.custom]() {
    return `${Airport.name} [${this.code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}