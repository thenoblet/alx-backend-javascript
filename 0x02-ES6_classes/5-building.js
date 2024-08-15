const privateData = new WeakMap();

/**
 * Represents a building.
 */
export default class Building {
  /**
   * Creates a new instance of the Building class.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} - If sqft is not a number.
   * @throws {Error} - If a class extending Building does not override evacuationWarningMessage.
   */
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    privateData.set(this, {
      /**
       * Validates the square footage.
       * @param {number} sqft - The square footage to validate.
       * @throws {Error} - If sqft is not a number.
       */
      validateSqft: (sqft) => {
        if (typeof sqft !== 'number') {
          throw new Error('sqft must be a number');
        }
      },
    });

    privateData.get(this).validateSqft(sqft);
    this.sqft = sqft;
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} - The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} sqft - The square footage to set.
   * @throws {Error} - If sqft is not a number.
   */
  set sqft(sqft) {
    privateData.get(this).validateSqft(sqft);
    this._sqft = sqft;
  }
}