#!/usr/bin/env node

const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('request');

const url = 'http://localhost:7865';

describe('Payment API Integration', () => {
  describe('Index Page', () => {
    it('should have a body', (done) => {
      request(url, (error, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.not.be.an('undefined');
        done();
      });
    });

    it('should have 200 as its status code', (done) => {
      request(url, (error, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should correctly display the welcome message', () => {
      request(url, (error, res) => {
        expect(res.body).to.equal('Welcome to the payment system');
      });
    });
  });
});
