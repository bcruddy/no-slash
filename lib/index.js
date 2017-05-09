const urlUtils = require('url');

module.exports = (statusCode = 301) => (req, res, next) => {
    if (['get', 'head'].indexOf(req.method.toLowerCase()) === -1) {
        return next();
    }

    let url = urlUtils.parse(req.url.toString());

    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
        url.pathname = url.pathname.slice(0, -1);

        res.redirect(statusCode, url.pathname + (url.search || ''));
    } else {
        next();
    }
};
