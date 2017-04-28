module.exports = (statusCode = 301) => (req, res, next) => {
    if (req.url.endsWith('/')) {
        res.redirect(statusCode, req.url.slice(0, -1));
    } else {
        next();
    }
};
