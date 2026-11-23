const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../app');

test('GET /api/greeting should return a greeting', async () => {
  const response = await request(app).get('/api/greeting');

  assert.equal(response.status, 200);
  assert.equal(response.body.message, 'Hello from the sample route');
});
