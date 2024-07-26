/* eslint-disable */

const validators = {
  validateObjValue: (varName, obj, expectedType) => {
	  // eslint-disable-next-line valid-typeof
	  if (typeof obj !== expectedType) {
      throw new TypeError(`${varName} must be a ${expectedType}`);
	  }
  },
};

export default class Car {
  constructor(brand, motor, color) {
	  this._brand = brand;
	  this._motor = motor;
	  this._color = color;
  }

  get brand() {
	  return this._brand;
  }

  get motor() {
	  return this._motor;
  }

  get color() {
	  return this._color;
  }

  set brand(value) {
	  validators.validateBrand('brand', value, 'string');
	  this._brand = value;
  }

  set motor(value) {
	  validators.validateBrand('motor', value, 'string');
	  this._motor = value;
  }

  set color(value) {
	  validators.validateBrand('color', value, 'string');
	  this._color = value;
  }

  cloneCar() {
	  return new this.constructor();
  }
}
