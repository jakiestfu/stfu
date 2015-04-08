module.exports = function (grunt) {

	var pkg = grunt.file.readJSON('package.json');
	var banner = "/*! shut the fuck up */";

	grunt.initConfig({

		pkg: pkg,

		clean: {
			pre: {
				src: ["dist"]
			}
		},

		concat: {
			tools: {
				options: {
					footer: "stfu.version = '<%= pkg.version %>';"
				},
				src: [
					'src/js/core.js',
					'src/js/**/*.js'
				],
				dest: 'dist/stfu.js'
			}
		},

		copy: {
			iris: {
				files: [
					{expand: true,  cwd: 'src/html/', src: ['**/*'], dest: 'dist/'}
				]
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'src/js/**/*.js']
		},

		less: {
			prod: {
				options: {
					banner: banner,
					compress: true,
					sourcemap: 'none'
				},
				files: {
					'dist/stfu.css': 'src/less/core.less'
				}
			}
		},

		uglify: {
			prod: {
				options: {
					banner: banner + "\n",
					preserveComments: 'none'
				},
				files: {
					'dist/stfu.js': 'dist/stfu.js'
				}
			}
		},

		watch: {
			js: {
				files: 'src/js/**/*.js',
				tasks: ['jshint', 'concat', 'uglify']
			},
			less: {
				files: 'src/less/**/*.less',
				tasks: ['less']
			},
			html: {
				files: 'src/html/**/*.html',
				tasks: ['copy']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Tasks
	grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify', 'copy', 'less']);
	grunt.registerTask('develop', ['jshint', 'clean', 'concat', 'uglify', 'copy', 'less', 'watch']);
};
