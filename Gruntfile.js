module.exports = function(grunt) {

	var path = require("path");

	grunt.initConfig({
		httpServer: {
			wwwRoot: "app/www",
			jsRoot: "app/www/js",
      cssRoot: "app/www/css",
      mediaRoot: "app/www/media",
      imageRoot: "app/www/i",
      libsRoot: "app/www/libs",
			port:8081,
			callback: function() {
  			grunt.log.writeln("Web server listening on port " + this.port);
  		}
		},
		mongoServer: {
			host: "localhost",
			port: 27017,
			dbName: "intuit"
		},
		logger: {
			transports: {
					console: {
						level:"info",
						colorize:true,
						timestamp:true
					},
					file: {
						fileName:"logs/app.log",
						level:"info",
						colorize:true,
						timestamp:true
					}
			},
		},
		handlebars: {
			compile: {
				options: {
					namespace: "templates",
					processName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					},
					processPartialName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					}
				},
				files: {
					"app/www/js/templates.js": "app/templates-min/**/*.min.hbs"
				}
			}
		},
		htmlmin: {
			templates: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
        expand: true,
        cwd: 'app/templates',
        src: '*.hbs',
        dest: 'app/templates-min/',
        ext: ".min.hbs"
	    }
		},
		sass: {
			main: {
        options: {
          sourcemap: "none"
        },
				files: {
					"app/www/css/site.css": "app/sass/site.scss"
				}
			}
		},
		cssmin: {
			main: {
        options: {
          keepSpecialComments: 0,
          sourceMap: false
        },
				files: {
					"app/www/css/site.min.css": [
            'app/www/libs/bootstrap/dist/css/bootstrap.css',
            'app/www/libs/bootstrap/dist/css/bootstrap-theme.css',
            'app/www/css/site.css',
          ]
				}
			}
		},
		uglify: {
			combine: {
        options: {
          compress: false,
          beautify: {
            beautify: true,
            indent_level: 2,
            comments: true
          },
          mangle: false,
        },
				files: {
					"app/www/js/site.js": [
            "app/www/libs/jquery/dist/jquery.js",
            "app/www/libs/bootstrap/dist/js/bootstrap.js",
            "app/www/libs/underscore/underscore.js",
            "app/www/libs/backbone/backbone.js",
            "app/www/libs/handlebars/handlebars.js",
            "app/www/libs/localforage/dist/localforage.js",
            'app/www/js/app.templates.js',
            'app/www/js/app.common.js',
            'app/www/js/models/**/*.js',
            'app/www/js/collections/**/*.js',
            'app/www/js/views/**/*.js',
            'app/www/js/routers/**/*.js',
            'app/www/js/app.js'
          ]
				}
			},
      minify: {
        options: {
          compress: {
            drop_debugger: true,
            unsafe: true,
            drop_console: true
          },
          beautify: false,
          mangle: {},
          screwIE8: true
        },
        files: {
          "app/www/js/site.min.js": "app/www/js/site.js"
        }
      }
		},
		compress: {
			js: {
				options: {
					mode: 'gzip'
				},
				files: {
					"app/www/js/site.min.gz.js": "app/www/js/site.min.js"
				}
			},
			css: {
				options: {
					mode: 'gzip'
				},
				files: {
					"app/www/css/site.min.gz.css": "app/www/css/site.min.css"
				}
			}
		},
		watch: {
			templates: {
				files: ["app/templates/**/*.hbs"],
				tasks: ["htmlmin", "handlebars"],
				options: {
					spawn: false
				}
			}
		}
	});

	//
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-compress");

	grunt.registerTask("webServer", "start a web server", function(port) {

		console.log("in gruntfile js");
		var
			httpServer = require("./app/http-server"),
			app = require("./app/app"),
			logger = global.logger = require("./app/logger.js")(grunt.config("logger"));
			config = {
				webSockets: require("./app/web-sockets"),
				httpServer: grunt.config("httpServer"),
				mongoServer: grunt.config("mongoServer"),
				//loggerConfig: grunt.config("loggerConfig")
			};

			console.log(config);
			logger.info("starting app...");

	    //this.async();
			//config.logger = require("./app/logger.js")(config.loggerConfig);
	    config.app = app(config);
	    httpServer(config);
	});

	//grunt.registerTask("default", ["webServer"]);
	//grunt.registerTask("default", ["htmlmin","handlebars","webServer","watch"]);
	grunt.registerTask("default", [
		"sass","cssmin","htmlmin","handlebars",
		"uglify","compress","webServer","watch"
	]);

};
