import request from 'supertest';
import { app } from '../src/app'; // Adjust the import based on your app's export

describe('Book API', () => {
  it('should create a new book', async () => {
    const response = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2023-01-01'
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Test Book');
  });

  it('should retrieve all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a book by ID', async () => {
    const bookId = 'someValidBookId'; // Replace with a valid book ID
    const response = await request(app).get(`/api/books/${bookId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', bookId);
  });

  it('should update a book', async () => {
    const bookId = 'someValidBookId'; // Replace with a valid book ID
    const response = await request(app)
      .put(`/api/books/${bookId}`)
      .send({
        title: 'Updated Test Book'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Updated Test Book');
  });

  it('should delete a book', async () => {
    const bookId = 'someValidBookId'; // Replace with a valid book ID
    const response = await request(app).delete(`/api/books/${bookId}`);
    expect(response.status).toBe(204);
  });
});