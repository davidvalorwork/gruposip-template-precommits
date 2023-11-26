/* eslint-env jest */
const request = require('supertest');
const app = require('../src/index.js'); // adjust this path to your index.js file

describe('GET /', () => {
  it('responds with Hello World!', done => {
    request(app)
      .get('/')
      .expect('Hello World!', done);
  });
});