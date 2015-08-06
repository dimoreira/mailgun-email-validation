var request = require('request');
var config = require('./mailgun-email-validation/mailgun-config');

module.exports.check = function(email, callback) {
	var options = {
		url: config.url,
		method: 'GET',
		qs: { address: email },
		auth: {
			username: config.username,
			password: config.key
		}
	};

	request(options, function(err, result) {
		if (err) callback(err, null);
		var response;
		try {
			response = JSON.parse(result.request.response.body);	
		} catch (e) {
			callback(new Error('Unable to parse response: ' + result.request.response.body), null);
		}
		
		callback(null, response.is_valid);
	});
};
