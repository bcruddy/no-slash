const app = require('express')(),
    noSlash = require('../lib'),
    response = (req, res) => {
        res.json({msg: 'done'});
    };

app.enable('strict routing')
    .use(noSlash())
    .get('', response)
    .get('/', response)
    .get('/path', response)
    .get('/path/more', response)
    .post('/path', response);

module.exports = app;
