const request = require('supertest');
const app = require('../src/app');

describe('API básica', () => {
  test('GET / responde 200 e texto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  try {
    const pool = require('../src/config/db');
    if (pool && typeof pool.end === 'function') {
      await pool.end();
    }
  } catch (e) {
    // ignore
  }
});
