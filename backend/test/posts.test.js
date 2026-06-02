jest.mock('../src/models/posts_models', () => ({
  getAllPosts: jest.fn(async () => [{ posts_id: 1, posts_title: 'Post 1' }]),
  getPostById: jest.fn(async (id) => ({ posts_id: id, posts_title: 'Post ' + id })),
  createPost: jest.fn(async (data) => ({ id: 2, ...data })),
  updatePost: jest.fn(async () => ({})),
  deletePost: jest.fn(async () => ({})),
}));

const request = require('supertest');
const app = require('../src/app');

describe('Posts endpoints (mocked)', () => {
  test('GET /feed deve retornar 200 (feed usa feed_models) - ignorado aqui', async () => {
    const res = await request(app).get('/feed');
    expect(res.statusCode).toBe(200);
  });

  test('GET /posts retorna lista mockada', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].posts_title).toBe('Post 1');
  });

  test('POST /posts cria post (mock)', async () => {
    const payload = { posts_users_id: 1, posts_title: 'Novo', posts_content: 'Conteúdo' };
    const res = await request(app).post('/posts').send(payload);
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
