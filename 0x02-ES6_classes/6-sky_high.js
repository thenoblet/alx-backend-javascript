import Building from './5-building';

const privateData = new WeakMap();

/**
 * Represents a sky-high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Create a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   * @throws {Error} If floors is not a number.
   */
  constructor(sqft, floors) {
    super(sqft);
    privateData.set(this, {
      validateFloors: (floors) => {
        if (typeof floors !== 'number') {
          throw new Error('floors must be a number');
        }
      },
    });

    privateData.get(this).validateFloors(floors);
    this._floors = floors;
  }

  /**
   * Get the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Set the number of floors in the building.
   * @param {number} floors - The number of floors.
   * @throws {Error} If floors is not a number.
   */
  set floors(floors) {
    privateData.get(this).validateFloors(floors);
    this._floors = floors;
  }

  /**
   * Get the evacuation warning message for the building.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}