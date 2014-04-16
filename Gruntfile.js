module.exports = function(grunt) {

	grunt.initConfig({

		// Concat Definitions
		concat: {
			dist: {
				src: ["src/jquery.mailgun-email-validation.js"],
				dest: "dist/jquery.mailgun-email-validation.js"
			}
		},

		// Minify Definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.mailgun-email-validation.js"],
				dest: "dist/jquery.mailgun-email-validation.min.js"
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["concat", "uglify"]);
}
