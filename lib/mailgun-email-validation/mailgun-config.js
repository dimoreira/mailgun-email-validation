var config = {
	url: 'https://api.mailgun.net/v3/address/validate',
	username: 'api',
	key: process.env.MAILGUN_PUBLIC_KEY
};

module.exports = config;
