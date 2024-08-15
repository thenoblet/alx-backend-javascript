const privateProps = new WeakMap();

const validators = {
  validateSize: (size) => {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (size < 0) {
      throw new RangeError('size must be a positive number');
    }
  },
  validateLocation: (location) => {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
  },
};

/**
 * Represents a HolbertonClass.
 * @class
 */
export default class HolbertonClass {
  /**
   * Create a HolbertonClass.
   * @constructor
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    privateProps.set(this, validators);

    privateProps.get(this).validateSize(size);
    privateProps.get(this).validateLocation(location);

    this._size = size;
    this._location = location;
  }

  /**
   * Get the size of the class.
   * @returns {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Set the size of the class.
   * @param {number} value - The size of the class.
   */
  set size(value) {
    privateProps.get(this).validateSize(value);
    this._size = value;
  }

  /**
   * Get the location of the class.
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Set the location of the class.
   * @param {string} value - The location of the class.
   */
  set location(value) {
    privateProps.get(this).validateLocation(value);
    this._location = value;
  }

  /**
   * Get a string representation of the class.
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }

  /**
   * Get the numeric value of the class.
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }
}