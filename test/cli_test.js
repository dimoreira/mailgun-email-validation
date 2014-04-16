var expect = require('expect.js');
var exec = require('child_process').exec;

describe('MailGun Validate CLI', function() {

	describe('run as a cli', function() {

		it('return false for email not valid', function(done) {
			exec('./bin/mailgun-validate test@example.com', function(err, stdout, stderr) {
				expect(err).to.be(null);
				expect(stdout).to.be('false\n');
				expect(stderr).to.be.empty();
				done();
			});
		});

		it('return true for email valid', function(done) {

			exec('./bin/mailgun-validate diegoalvesmoreira@gmail.com', function(err, stdout, stderr) {
				expect(err).to.be(null);
				expect(stdout).to.be('true\n');
				expect(stderr).to.be.empty();
				done();
			});

		});

	});

});
