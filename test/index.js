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
        next = () => {};

    it('redirects urls that contain a trailing slash', () => {
        let spiedNext = sinon.spy(next);

        noSlash()(reqWithoutSlash, res, spiedNext);

        expect(spiedNext.called).to.be.true;
    });

    it('redirects urls does not redirect urls without a trailing slash', () => {
        let spiedRedirect = sinon.spy(res, 'redirect');

        noSlash()(reqWithSlash, res, next);

        expect(spiedRedirect.calledWith(301)).to.be.true;
    });
});
