# no-slash
Express middleware for forcing no trailing url slash via 301 redirect

### Usage

`$ yarn install no-slash --save` or `$ npm install no-slash --save`

```javascript
const express = require('express'),
    noSlash = require('no-slash'),
    app = express();

app.use(noSlash());
```
