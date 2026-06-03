// mock do model
jest.mock('../src/models/users_models', () => ({
  getAllUsers: jest.fn(async () => [{ user_id: 1, user_name: 'Alice' }]),
  getUserById: jest.fn(async (id) => ({ user_id: id, user_name: 'Alice' })),
  getUserByEmail: jest.fn(async (email) => {
    if (email === 'bob@example.com') {
      return { user_id: 2, user_name: 'Bob', user_email: 'bob@example.com', user_password: 'secret' };
    }
    return null;
  }),
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

  test('POST /user/login faz login com email e senha corretos', async () => {
    const payload = { user_email: 'bob@example.com', user_password: 'secret' };
    const res = await request(app).post('/user/login').send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login realizado com sucesso');
    expect(res.body.user.user_email).toBe('bob@example.com');
    expect(res.body.user.user_password).toBeUndefined();
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
