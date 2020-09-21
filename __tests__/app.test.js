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

  // it('returns HTML with an h1 and the word red', async() => {
  //   const response = await request(app)
  //     .get('/red');
  //   expect()
  // })
});
