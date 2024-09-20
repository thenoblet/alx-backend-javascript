#!/usr/bin/env node

const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');
const { additionFixtures, invalidArgsFixtures } = require('./fixtures');
const Utils = require('./utils');

/**
 * Test the `calculateNumber()` function.
 */
describe('calculateNumber()', () => {
  additionFixtures.forEach(({ args, expected }) => {
    it(`correctly adds ${args[0]} and ${args[1]} as ${expected}`, () => {
      const res = calculateNumber(...args);
      assert.strictEqual(res, expected);
    });
  });

  invalidArgsFixtures.forEach(({ args, expected }) => {
    it(`throws a TypeError when ${Utils.getType(args[0])} and ${Utils.getType(args[1])} are passed as arguments`,
      () => {
        assert.throws(() => calculateNumber(...args), expected);
      });
  });

  it('throws a TypeError when any or all of the arguments are omitted', () => {
    assert.throws(() => calculateNumber(4), TypeError);
    assert.throws(() => calculateNumber(), TypeError);
  });
});
