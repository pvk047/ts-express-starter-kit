import request from 'supertest'
import app from '../src/app'

describe('GET /user', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});