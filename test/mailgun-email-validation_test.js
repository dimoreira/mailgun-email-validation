var expect = require('expect.js');
var validator = require('../lib/mailgun-email-validation');
var sinon = require('sinon');
var request = require('request');

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

		describe('with an error from the request', function() {
			var errorMessage = 'some error';

			var stub;
			before(function() {
				stub = sinon.stub(request, 'Request');
				stub.yieldsTo('callback', errorMessage);
			});

			it('error in callback', function(done) {

				validator.check('diegoalvesmoreira@gmail.com', function(err, valid) {
					expect(err).to.equal(errorMessage);
					done();
				});
			});

			after(function() {
				stub.restore();
			});
		});
		
		describe('with an error from the mailgun', function() {

			var stub;
			before(function() {
				stub = sinon.stub(request, 'Request');
				stub.yieldsTo('callback', null, {
					statusCode: 401
				});
			});

			it('401 from mailgun', function(done) {
				validator.check('diegoalvesmoreira@gmail.com', function(err, valid) {
					expect(err).to.equal('Received status 401');
					done();
				});
			});

			after(function() {
				stub.restore();
			});
		});

	});

});