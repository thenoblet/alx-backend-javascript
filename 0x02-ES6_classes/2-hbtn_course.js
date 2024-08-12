/* eslint-disable */

/**
 * Class representing a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Create a HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The duration of the course in weeks.
   * @param {string[]} students - The names of the students enrolled in the course.
   * @throws {TypeError} If `name` is not a string.
   * @throws {TypeError} If `length` is not a non-negative number.
   * @throws {TypeError} If `students` is not an array of strings.
   */
  constructor(name, length, students) {
	this.validateName(name);
	this.validateLength(length);
	this.validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Validate Methods
  validateName(name){
	if (typeof name !== "string"){
		throw new TypeError('Name must be a string')
	}
  }

  validateLength(length){
	if (typeof length !== 'number'){
		throw new TypeError('Length must be a number');
	}

	if (length < 0){
		throw new Error("Length must be positive")
	}
  }

  validateStudents(students){
	if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')){
		throw new TypeError('Students must be an array of students')
	}
  }


  get name() {
    return this._name;
  }

  set name(name) {
	this.validateName(name);
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
	this.validateLength(length)
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
	this.validateStudents(students)
	this._students = students;
  }
}