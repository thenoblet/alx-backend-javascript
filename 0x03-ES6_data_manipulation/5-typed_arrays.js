/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to insert the Int8 value.
 * @param {number} value - The Int8 value to insert.
 * @returns {DataView} - A DataView of the ArrayBuffer with the Int8 value set.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const dataView = new DataView(buffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);

  return dataView;
}
