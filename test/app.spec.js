const App = require('./app'),
    request = require('supertest'),
    noSlash = require('../lib'),
    es5NoSlash = require('../lib/es5');

[noSlash, es5NoSlash].forEach((noSlashModule, index) => {
    describe(`the no-slash module - ${index}`, function () {
        let app;

        beforeAll(() => {
            app = App(noSlashModule);
        });

        describe('returns 200', function () {
            it('GET /', done => {
                request(app)
                    .get('/')
                    .expect(200, done);
            });

            it('POST /path', done => {
                request(app)
                    .post('/path')
                    .expect(200, done);
            });

            it('GET /path', done => {
                request(app)
                    .get('/path')
                    .expect(200, done);
            });

            it('GET /path?a=b', done => {
                request(app)
                    .get('/path?a=b')
                    .expect(200, done);
            });

            it('GET /path/more?a=b', done => {
                request(app)
                    .get('/path/more?a=b')
                    .expect(200, done);
            });
        });

        describe('returns 301 redirect', function () {
            it('GET /path/', done => {
                request(app)
                    .get('/path/')
                    .expect('location', '/path')
                    .expect(301, done);
            });

            it('GET /path/?a=b', done => {
                request(app)
                    .get('/path/?a=b')
                    .expect('location', '/path?a=b')
                    .expect(301, done);
            });

            it('GET /path/more/?a=b', done => {
                request(app)
                    .get('/path/more/?a=b')
                    .expect('location', '/path/more?a=b')
                    .expect(301, done);
            });
        });

        describe('returns 302 redirect', function () {
            let app302;

            beforeAll(() => {
                app302 = App(noSlashModule, 302);
            });

            it('GET /path/', done => {
                request(app302)
                    .get('/path/')
                    .expect('location', '/path')
                    .expect(302, done);
            });

            it('GET /path/?a=b', done => {
                request(app302)
                    .get('/path/?a=b')
                    .expect('location', '/path?a=b')
                    .expect(302, done);
            });

            it('GET /path/more/?a=b', done => {
                request(app302)
                    .get('/path/more/?a=b')
                    .expect('location', '/path/more?a=b')
                    .expect(302, done);
            });
        });
    });
});
