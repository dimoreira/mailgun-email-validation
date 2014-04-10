var expect = require('expect.js');
var validator = require('../lib/mailgun-email-validation');

describe('MailGun Email Validation', function() {

	it('should be initialized', function(done) {
		expect(validator).to.be.ok();
		done();
	});

	describe('#check', function() {

		it('email not valid', function(done) {
			validator.check('test@example.com', function(err, valid) {
				if (err) throw err;
				expect(valid).to.be(false);
				done();
			});
		});

		it('email valid', function(done) {
			validator.check('diegoalvesmoreira@gmail.com', function(err, valid) {
				if (err) throw err;
				expect(valid).to.be(true);
				done();
			});
		});

	});

});
