[![npm version](https://badge.fury.io/js/no-slash.svg)](https://badge.fury.io/js/no-slash)
[![Build Status](https://travis-ci.org/bcruddy/no-slash.svg?branch=master)](https://travis-ci.org/bcruddy/no-slash)

# no-slash
Express middleware for forcing no trailing url slash via redirect.
Defaults to a 301, status code can be passed as an argument.

### Usage
- node 6+ recommended, for node < 6, an ES5 module is available at `lib/es5.js`.
- `$ yarn add no-slash` or `$ npm install no-slash --save`

```javascript
const express = require('express'),
    noSlash = require('no-slash'),
    app = express();

app.use(noSlash());
```

Or for node < 6

```javascript
var express = require('express'),
    noSlash = require('no-slash/lib/es5'),
    app = express();

app.use(noSlash());
```

### Contributing
Feel free to fork and submit a PR. Please reference an issue in your PR to simplify tracking them (create one if it doesn't exist, feature or bug).

- node v8, npm v5
- Tests are run with [jest](https://facebook.github.io/jest/), 100% coverage is required
- Linting with [eslint](http://eslint.org/)
- TravisCI for deploy to npm
