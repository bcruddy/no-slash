const urlUtils = require('url');

module.exports = (statusCode = 301) => (req, res, next) => {
    let skip = !(/^(head|get)$/i).test(req.method),
        url;

    if (skip) {
        return next();
    }

    url = urlUtils.parse(req.url.toString());

    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
        url.pathname = url.pathname.slice(0, -1);

        res.redirect(statusCode, urlUtils.format(url));
    } else {
        next();
    }
};
