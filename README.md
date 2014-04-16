# mailgun-email-validation

## Build Status

[![Build Status](https://travis-ci.org/dimoreira/mailgun-email-validation.svg?branch=master)](https://travis-ci.org/dimoreira/mailgun-email-validation)

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

## jQuery Plugin Version

### Instalation

For the jQuery version, download the full plugin or the minified version from the **dist** folder:

```
+-- dist/
|   +-- jquery.mailgun-email-validation.js
|   +-- jquery.mailgun-email-validation.min.js
```

Add the **jQuery** library to your view file before adding the plugin:

```html
<!-- your-view-or-html-file -->
<head>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
	<script type="text/javascript" src="dist/jquery.mailgun-email-validation.min.js"></script>
</head>
```

### Usage

Call the plugin as a jQuery method:

```javascript
$(document).ready(function() {
	$.mailgun_validate('test@example.com', function(err, valid) {
		if(err) throw err;

		/**
		 * Do what you need whith the "valid" result
		 *
		 * valid:
		 *   (true) - If email is valid
		 *   (false) - If email it not valid
		 */
	});
});
```

See **/test/browser/index.html** for examples of use.

## Tests

A suite of tests is available (using [Mocha](http://visionmedia.github.io/mocha/)) which require **node.js**. Once **node.js** is installed, run the following command from the project root to install the development dependencies:

```shell
$ npm install --dev
```

Once installed the tests can be run from the project root using:

```shell
$ npm test
```

***

For the jQuery version open the **test/browser/index.html** in the browser for see the tests and usage:

```
+-- test/
|   +-- browser/
|       +-- index.html
```

## Author

**Diego Moreira:**

Twitter - https://twitter.com/_diego_moreira

Blog - https://medium.com/@_diego_moreira

## License

The MIT License (MIT)

Copyright (c) 2014 Diego Moreira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
