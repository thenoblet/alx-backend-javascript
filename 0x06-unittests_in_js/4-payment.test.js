#!/usr/bin/env node

const sinon = require('sinon');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct parameters', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.getCall(0).returnValue).to.equal(10);
    stub.restore();
  });
});
