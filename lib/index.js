const {parse, format} = require('url'),
    reqMethodRegex = /^(head|get)$/i;

module.exports = (statusCode = 301) => (req, res, next) => {
    const skipReqMethod = !reqMethodRegex.test(req.method),
        url = parse(req.url),
        isNoSlash = !url.pathname.endsWith('/'),
        isPathLengthOk = url.pathname.length > 1;

    if (skipReqMethod || isNoSlash || !isPathLengthOk) {
        return next();
    }

    url.pathname = url.pathname.slice(0, -1);
    res.redirect(statusCode, format(url));
};
