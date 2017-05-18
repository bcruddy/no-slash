const express = require('express'),
    response = (req, res) => {
        res.json({msg: 'done'});
    };

module.exports = (noSlash, statusCode) => {
    statusCode = statusCode || undefined;

    return express()
        .enable('strict routing')
        .use(noSlash(statusCode))
        .get('/', response)
        .get('/path', response)
        .get('/path/more', response)
        .post('/path', response);
};
