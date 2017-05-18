var _url = require('url'),
    parse = _url.parse,
    format = _url.format,
    reqMethodRegex = /^(head|get)$/i;

module.exports = function (statusCode) {
    if (statusCode === void 0) {
        statusCode = 301;
    }

    return function (req, res, next) {
        var skipReqMethod = !reqMethodRegex.test(req.method),
            url = parse(req.url),
            hasSlash = url.pathname[url.pathname.length - 1] === '/',
            isSlashAllowed = url.pathname.length <= 1;

        if (skipReqMethod || !hasSlash || isSlashAllowed) {
            return next();
        }

        url.pathname = url.pathname.slice(0, -1);
        res.redirect(statusCode, format(url));
    };
};
