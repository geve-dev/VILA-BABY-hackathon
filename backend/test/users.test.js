// mock do model
jest.mock('../src/models/users_models', () => ({
  getAllUsers: jest.fn(async () => [{ user_id: 1, user_name: 'Alice' }]),
  getUserById: jest.fn(async (id) => ({ user_id: id, user_name: 'Alice' })),
  createUser: jest.fn(async (data) => ({ insertId: 2, ...data })),
  updateUser: jest.fn(async () => ({})),
  deleteUser: jest.fn(async () => ({})),
}));

const request = require('supertest');
const app = require('../src/app');

describe('Users endpoints (mocked)', () => {
  test('GET /user retorna lista mockada', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].user_name).toBe('Alice');
  });

  test('POST /user cria usuário (mock)', async () => {
    const payload = { user_name: 'Bob', user_email: 'bob@example.com', user_password: 'secret' };
    const res = await request(app).post('/user').send(payload);
    expect(res.statusCode).toBe(201);
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
