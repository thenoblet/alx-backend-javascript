#!/usr/bin/env node

/**
 * @module
 * A simple utilities module
 */
class Utils {
  /**
   * Return the integer sum of two numbers.
   * @static
   * @param type {string} - The type of operation to be perform. Allowed
   * options are 'SUM', 'SUBTRACT', 'DIVIDE'.
   * @param a {number} - The first number.
   * @param b {number} - The second number.
   * @returns {number} The sum of the two numbers rounded up.
   */
  static calculateNumber(type, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }

    const operations = {
      SUM: (a, b) => Math.round(a) + Math.round(b),
      SUBTRACT: (a, b) => Math.round(a) - Math.round(b),
      DIVIDE: (a, b) => {
        if (Math.round(b) === 0) {
          return 'Error';
        }
        return Math.round(a) / Math.round(b);
      },
    };

    const operation = operations[type];
    if (!operation) {
      throw new Error(`Invalid operation type. Allowed types are ${Object.keys(operations)}`);
    }

    return operation(a, b);
  }

  /**
   * Return the type of the object.
   * @static
   * @param variable - The object to check the type of.
   * @returns {string} The type of the object.
   */
  static getType(variable) {
    if (variable === null) {
      return 'null';
    }
    if (Array.isArray(variable)) {
      return 'array';
    }
    if (typeof variable === 'object') {
      return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }
    return typeof variable;
  }
}

module.exports = Utils;
