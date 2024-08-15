/* eslint-disable */

/**
 * Represents a HolbertonClass.
 * @class
 */
export class HolbertonClass {
	/**
	 * Creates a new instance of HolbertonClass.
	 * @constructor
	 * @param {number} year - The year of the class.
	 * @param {string} location - The location of the class.
	 */
	constructor(year, location) {
	  this._year = year;
	  this._location = location;
	}
  
	/**
	 * Get the year of the class.
	 * @returns {number} The year of the class.
	 */
	get year() {
	  return this._year;
	}
  
	/**
	 * Get the location of the class.
	 * @returns {string} The location of the class.
	 */
	get location() {
	  return this._location;
	}
  }
  
  /**
   * Represents a student at Holberton School.
   * @class
   */
  export class StudentHolberton {
	/**
	 * Create a student.
	 * @constructor
	 * @param {string} firstName - The first name of the student.
	 * @param {string} lastName - The last name of the student.
	 * @param {object} holbertonClass - The Holberton class the student belongs to.
	 */
	constructor(firstName, lastName, holbertonClass) {
	  this._firstName = firstName;
	  this._lastName = lastName;
	  this._holbertonClass = holbertonClass;
	}
  
	/**
	 * Get the full name of the student.
	 * @readonly
	 * @returns {string} The full name of the student.
	 */
	get fullName() {
	  return `${this._firstName} ${this._lastName}`;
	}
  
	/**
	 * Get the Holberton class the student belongs to.
	 * @readonly
	 * @returns {object} The Holberton class the student belongs to.
	 */
	get holbertonClass() {
	  return this._holbertonClass;
	}
  
	/**
	 * Get the full description of the student.
	 * @readonly
	 * @returns {string} The full description of the student.
	 */
	get fullStudentDescription() {
	  return (
		`${this._firstName} `
		+ `${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`
	  );
	}
  }
  
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  const listOfStudents = [student1, student2, student3, student4, student5];
  
  export default listOfStudents;