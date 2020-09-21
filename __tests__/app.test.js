const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi', async() => {
    const response = await request(app)
      .get('/');
    expect(response.text).toEqual('hi');
  });

  it('/echo returns plain text with the response body', async() => {
    const response = await request(app)
      .post('/echo')
      .send('hi there again');
    expect(response.text).toEqual('hi there again');
  });

  it('returns HTML with an h1 and the word red', async() => {
    const response = await request(app)
      .get('/red');
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('returns HTML with an h1 and the word green', async() => {
    const response = await request(app)
      .get('/green');
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('returns HTML with an h1 and the word blue', async() => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');
  });
});
