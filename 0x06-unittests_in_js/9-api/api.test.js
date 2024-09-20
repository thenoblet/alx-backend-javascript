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
  describe('Single Cart Details', () => {
    it('should handle non-numeric IDs well: expect 404', (done) => {
      request(`${url}/cart/bla`, (error, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });

    [10, 45, 1000, 8, 4, 50000, 1, 3, 87, 1010, 7733].forEach((id) => {
      it(`should correctly display message for integer ID: ${id}`, (done) => {
        request(`${url}/cart/${id}`, (error, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.not.be.an('undefined');
          expect(res.body).to.equal(`Payment methods for cart ${id}`);
          done();
        });
      });
    });

    it('should handle alphanumeric values correctly: expect 404', (done) => {
      request(`${url}/cart/sev78in`, (error, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.equal('Not found');
        done();
      });
    });

    it('should correctly handle floating point numbers: expect 404', (done) => {
      request(`${url}/cart/78.5`, (error, res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.equal('Not found');
        done();
      });
    });
  });
});
