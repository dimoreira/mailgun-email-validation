var request = require('request');
var config = require('./mailgun-email-validation/mailgun-config');

module.exports.check = function(email, callback) {
	var options = {
		url: config.url,
		method: 'GET',
		qs: {
			address: email
		},
		auth: {
			username: config.username,
			password: config.key
		}
	};

	request(options, function(err, response, body) {
		if (err) return callback(err, null);
		if (response.statusCode !== 200) return callback('Received status ' + response.statusCode);

		var response = JSON.parse(body);
		callback(null, response.is_valid);
	});
};