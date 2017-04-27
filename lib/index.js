module.exports = () => (req, res, next) => {
    if (req.url.endsWith('/')) {
        res.redirect(301, req.url.slice(0, -1));
    } else {
        next();
    }
};
