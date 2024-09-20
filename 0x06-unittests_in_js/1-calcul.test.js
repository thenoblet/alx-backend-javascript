#!/usr/bin/env node

const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');
const {
  additionFixtures,
  divisionFixtures,
  subtractionFixtures,
  invalidArgsFixtures,
  divisionByZeroFixtures,
} = require('./fixtures');
const Utils = require('./utils');

describe('calculateNumber function', () => {
  describe('general error handling capabilities', () => {
    it('handles invalid operation types well', () => {
      assert.throws(() => calculateNumber('BAD', 4, 5), Error);
    });

    ['sum', 'subtract', 'division'].forEach((invalidOperationType) => {
      it(`fails when operation type is lowercase instead of uppercase: ${invalidOperationType}`,
        () => {
          assert.throws(() => calculateNumber(invalidOperationType, 1, 2), Error);
        });
    });
  });

  describe('adding numbers with the SUM operation type', () => {
    const operationType = 'SUM';

    additionFixtures.forEach(({ args, expected }) => {
      it(`correctly adds ${args[0]} and ${args[1]} as ${expected}`, () => {
        const res = calculateNumber(operationType, ...args);
        assert.strictEqual(res, expected);
      });
    });

    invalidArgsFixtures.forEach(({ args, expected }) => {
      it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
        () => {
          assert.throws(() => calculateNumber(operationType, ...args),
            expected);
        });
    });
  });

  describe('subtracting numbers with the SUBTRACT operation type',
    () => {
      const operationType = 'SUBTRACT';

      subtractionFixtures.forEach(({ args, expected }) => {
        it(`correctly subtracts ${args[1]} from ${args[0]} as ${expected}`,
          () => {
            const res = calculateNumber(operationType, ...args);
            assert.strictEqual(res, expected);
          });
      });

      invalidArgsFixtures.forEach(({ args, expected }) => {
        it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
          () => {
            assert.throws(() => calculateNumber(operationType, ...args),
              expected);
          });
      });
    });

  describe('dividing numbers with the DIVIDE operation type',
    () => {
      const operationType = 'DIVIDE';

      divisionFixtures.forEach(({ args, expected }) => {
        it(`correctly divides ${args[0]} and ${args[1]} as ${expected}`,
          () => {
            const res = calculateNumber(operationType, ...args);
            assert.strictEqual(res, expected);
          });
      });

      invalidArgsFixtures.forEach(({ args, expected }) => {
        it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
          () => {
            assert.throws(() => calculateNumber(operationType, ...args),
              expected);
          });
      });

      divisionByZeroFixtures.forEach(({ args, expected }) => {
        it("return 'Error' for division by zero attempts", () => {
          assert.strictEqual(calculateNumber(operationType, ...args), expected);
        });
      });
    });
});
