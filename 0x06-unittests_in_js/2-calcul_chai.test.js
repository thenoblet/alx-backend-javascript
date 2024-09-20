#!/usr/bin/env node

const { expect } = require('chai');
const { describe, it } = require('mocha');

const calculateNumber = require('./2-calcul_chai');
const {
  additionFixtures,
  divisionByZeroFixtures,
  divisionFixtures,
  invalidArgsFixtures,
  subtractionFixtures,
} = require('./fixtures');
const Utils = require('./utils');

describe('calculateNumber function', () => {
  describe('general error handling capabilities', () => {
    it('handles invalid operation types well', () => {
      expect(() => calculateNumber('BAD', 4, 5)).to.throw(Error);
    });

    ['sum', 'subtract', 'division'].forEach((invalidOperationType) => {
      it(`fails when operation type is lowercase instead of uppercase: ${invalidOperationType}`,
        () => {
          expect(() => calculateNumber(invalidOperationType, 1, 2)).to.throw(Error);
        });
    });
  });

  describe('adding numbers with the SUM operation type', () => {
    const operationType = 'SUM';

    additionFixtures.forEach(({ args, expected }) => {
      it(`correctly adds ${args[0]} and ${args[1]} as ${expected}`, () => {
        const res = calculateNumber(operationType, ...args);
        expect(res).to.equal(expected);
      });
    });

    invalidArgsFixtures.forEach(({ args, expected }) => {
      it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
        () => {
          expect(() => calculateNumber(operationType, ...args)).to.throw(expected);
        });
    });
  });

  describe('subtracting numbers with the SUBTRACT operation type', () => {
    const operationType = 'SUBTRACT';

    subtractionFixtures.forEach(({ args, expected }) => {
      it(`correctly subtracts ${args[1]} from ${args[0]} as ${expected}`, () => {
        const res = calculateNumber(operationType, ...args);
        expect(res).to.equal(expected);
      });
    });

    invalidArgsFixtures.forEach(({ args, expected }) => {
      it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
        () => {
          expect(() => calculateNumber(operationType, ...args)).to.throw(expected);
        });
    });
  });

  describe('dividing numbers with the DIVIDE operation type', () => {
    const operationType = 'DIVIDE';

    divisionFixtures.forEach(({ args, expected }) => {
      it(`correctly divides ${args[0]} and ${args[1]} as ${expected}`, () => {
        const res = calculateNumber(operationType, ...args);
        expect(res).to.equal(expected);
      });
    });

    invalidArgsFixtures.forEach(({ args, expected }) => {
      it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
        () => {
          expect(() => calculateNumber(operationType, ...args)).to.throw(expected);
        });
    });

    divisionByZeroFixtures.forEach(({ args, expected }) => {
      it("returns 'Error' for division by zero attempts", () => {
        expect(calculateNumber(operationType, ...args)).to.equal(expected);
      });
    });
  });
});
