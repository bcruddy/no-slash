const app = require('./app'),
    request = require('supertest');

describe('the no-slash module', function () {
    it('GET - 200', done => {
        request(app)
            .get('')
            .expect(200, done);
    });

    it('GET / - 200', done => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('GET /path - 200', done => {
        request(app)
            .get('/path')
            .expect(200, done);
    });

    it('GET /path/ - 301', done => {
        request(app)
            .get('/path/')
            .expect('location', '/path')
            .expect(301, done);
    });

    it('GET /path?a=b - 200', done => {
        request(app)
            .get('/path?a=b')
            .expect(200, done);
    });

    it('GET /path/?a=b - 301', done => {
        request(app)
            .get('/path/?a=b')
            .expect('location', '/path?a=b')
            .expect(301, done);
    });

    it('GET /path/more?a=b - 200', done => {
        request(app)
            .get('/path/more?a=b')
            .expect(200, done);
    });

    it('GET /path/more/?a=b - 301', done => {
        request(app)
            .get('/path/more/?a=b')
            .expect('location', '/path/more?a=b')
            .expect(301, done);
    });

    it('POST /path - 200', done => {
        request(app)
            .post('/path')
            .expect(200, done);
    });
});
