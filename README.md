# mailgun-email-validation

## Build Status

## About

A simple Node module that wraps the email validation API from [Mailgun](http://mailgun.com/).

### Disclaimer
The **mailgun-email-validation** module uses the third party service from Mailgun to check the validity of the email [(API Docs)](http://documentation.mailgun.com/api-email-validation.html).

## Module Version

### Instalation

```shell
$ npm install mailgun-email-validation
```

### The Code

```javascript
var validator = require('mailgun-email-validation');

validator.check('test@example.com', function(err, valid) {
	if (err) throw err;
	return valid;
});
```

## CLI Version

### Instalation

```shell
$ npm install -g mailgun-email-validation
```

### The Commands

```javascript
$ mailgun-validate 'test@example.com'
```

The output is **true** for valid and **false** for invalid.

## Tests

A suite of tests is available (using [Mocha](http://visionmedia.github.io/mocha/)) which require **node.js**. Once **node.js** is installed, run the following command from the project root to install the development dependencies:

```shell
$ npm install --dev
```

Once installed the tests can be run from the project root using:

```shell
$ npm test
```
