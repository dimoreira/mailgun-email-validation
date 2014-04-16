(function($) {
	$.mailgun_validate = function(email, callback) {
		if (email == null || email == '')
			return callback('E-mail cannot be null or empty', null);

		var config = {
			url: 'https://api.mailgun.net/v2/address/validate',
			username: 'api',
			key: 'pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7'
		}

		$.ajax({
			url: config.url,
			type: 'GET',
			username: config.username,
			password: config.key,
			data: { address: email },
			error: function(xhr, textStatus, error) {
				callback(error, null);
			},
			success: function(response) {
				callback(null, response.is_valid);
			}
		});
	};
})(jQuery);
