const {parse, format} = require('url'),
    reqMethodRegex = /^(head|get)$/i;

module.exports = (statusCode = 301) => (req, res, next) => {
    const skipReqMethod = !reqMethodRegex.test(req.method),
        url = parse(req.url),
        hasSlash = url.pathname.endsWith('/'),
        isSlashAllowed = url.pathname.length <= 1;

    if (skipReqMethod || !hasSlash || isSlashAllowed) {
        return next();
    }

    url.pathname = url.pathname.slice(0, -1);
    res.redirect(statusCode, format(url));
};
