const expect = require('chai').expect,
    noSlash = require('../lib/'),
    sinon = require('sinon');

describe('no-slash express middleware', function () {
    let reqWithSlash = {
            url: {
                endsWith: () => true,
                slice: () => {}
            },
        },
        reqWithoutSlash = {
            url: {
                endsWith: () => false
            },
        },
        res = {
            redirect: () => {}
        },
        next = () => {},
        spiedNext = sinon.spy(next),
        spiedRedirect = sinon.spy(res, 'redirect');

    afterEach(() => {
        spiedNext.reset();
        spiedRedirect.reset();
    });

    it('does not redirect urls that do not have a trailing slash', () => {
        noSlash()(reqWithoutSlash, res, spiedNext);

        expect(spiedNext.called).to.be.true;
    });

    it('301 redirects urls with trailing slash when no argument is given', () => {
        noSlash()(reqWithSlash, res, next);

        expect(spiedRedirect.calledWith(301)).to.be.true;
    });

    it('acccepts statusCode arg for redirect', () => {
        noSlash(302)(reqWithSlash, res, next);

        expect(spiedRedirect.calledWith(302)).to.be.true;
    });
});
