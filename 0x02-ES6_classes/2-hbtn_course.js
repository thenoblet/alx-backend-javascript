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
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number' && length >= 0) {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
	if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
		this._students = students;
	} else {
		throw new TypeError('Student must be an array');
	}
  }
}