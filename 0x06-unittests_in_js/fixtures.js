#!/usr/bin/env node


const additionFixtures = [
  { args: [1, 2], expected: 3 },
  { args: [1, 1.3], expected: 2 },
  { args: [0.5, 0.5], expected: 2 },
  { args: [10.3, 5.6], expected: 16 },
  { args: [1.5, 3.7], expected: 6 },
  { args: [2.4, 3.6], expected: 6 },
  { args: [1.1, 2.9], expected: 4 },
  { args: [0.1, 0.9], expected: 1 },
  { args: [5.5, 5.5], expected: 12 },
  { args: [7.2, 3.8], expected: 11 },
  { args: [2.5, 2.5], expected: 6 },
  { args: [9.9, 0.1], expected: 10 },
  { args: [4.4, 4.6], expected: 9 },
  { args: [6.7, 2.3], expected: 9 },
  { args: [3.3, 3.3], expected: 6 },
  { args: [2.4, 3.6], expected: 6 },
  { args: [1.1, 2.9], expected: 4 },
  { args: [5.5, 5.5], expected: 12 },
  { args: [7.2, 3.8], expected: 11 },
  { args: [2.5, 2.5], expected: 6 },
  { args: [9.9, 0.1], expected: 10 },
  { args: [4.7, 4.6], expected: 10 },
  { args: [6.7, 2.3], expected: 9 },
  { args: [3.3, 3.3], expected: 6 },
  { args: [2.6, 2.4], expected: 5 },
  { args: [1.4, 1.6], expected: 3 },
  { args: [0.4, 0.6], expected: 1 },
  { args: [5.4, 5.6], expected: 11 },
  { args: [7.6, 3.4], expected: 11 },
  { args: [2.1, 2.9], expected: 5 },
  { args: [9.4, 0.6], expected: 10 },
  { args: [4.5, 4.5], expected: 10 },
  { args: [6.3, 2.7], expected: 9 },
  { args: [3.7, 3.3], expected: 7 },
  { args: [2.2, 2.8], expected: 5 },
  { args: [1.9, 1.1], expected: 3 },
  { args: [0.7, 0.3], expected: 1 },
  { args: [5.8, 5.2], expected: 11 },
  { args: [7.1, 3.9], expected: 11 },
  { args: [2.3, 2.7], expected: 5 },
  { args: [9.2, 0.8], expected: 10 },
  { args: [4.8, 4.2], expected: 9 },
  { args: [6.6, 2.4], expected: 9 },
  { args: [3.1, 3.9], expected: 7 },
];

const subtractionFixtures = [
  { args: [5, 3], expected: 2 },
  { args: [1.5, 0.5], expected: 1 },
  { args: [10.3, 5.6], expected: 4 },
  { args: [7.2, 3.8], expected: 3 },
  { args: [2.5, 2.5], expected: 0 },
  { args: [9.9, 0.1], expected: 10 },
  { args: [4.4, 4.6], expected: -1 },
  { args: [6.7, 2.3], expected: 5 },
  { args: [3.3, 3.3], expected: 0 },
  { args: [2.4, 3.6], expected: -2 },
];

const divisionFixtures = [
  { args: [6, 3], expected: 2 },
  { args: [1.5, 0.5], expected: 2 },
  { args: [10.3, 5.6], expected: 1.6666666666666667 },
  { args: [7.2, 3.6], expected: 1.75 },
  { args: [2.5, 2.5], expected: 1 },
  { args: [4.4, 4.4], expected: 1 },
  { args: [6.7, 2.3], expected: 3.5 },
  { args: [3.3, 3.3], expected: 1 },
  { args: [2.4, 1.2], expected: 2 },
];

const invalidArgsFixtures = [
  { args: [3, '4'], expected: TypeError },
  { args: [null, null], expected: TypeError },
  { args: ['3', 4], expected: TypeError },
  { args: ['4.3', '1.2'], expected: TypeError },
  { args: ['4.3', undefined], expected: TypeError },
  { args: [[1, 4], { number: 3 }], expected: TypeError },
];

const divisionByZeroFixtures = [
  { args: [10, 0], expected: 'Error' },
  { args: [5.5, 0.3], expected: 'Error' },
  { args: [0.3, 0.1], expected: 'Error' },
  { args: [3.3, 0], expected: 'Error' },
  { args: [7.2, 0.23], expected: 'Error' },
];


module.exports = {
  additionFixtures,
  subtractionFixtures,
  divisionFixtures,
  invalidArgsFixtures,
  divisionByZeroFixtures,
};
