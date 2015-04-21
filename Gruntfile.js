module.exports = function(grunt) {

	grunt.initConfig({
		httpServer: {
			wwwRoot: "app/www",
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
		loggerConfig: {
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
		}
	});

	grunt.registerTask("webServer", "start a web server", function(port) {

		console.log("in gruntfile js");
		var
			httpServer = require("./app/http-server"),
			app = require("./app/app"),
			config = {
				webSockets: require("./app/web-sockets"),
				httpServer: grunt.config("httpServer"),
				mongoServer: grunt.config("mongoServer"),
				loggerConfig: grunt.config("loggerConfig")
			};

			console.log(config);

	    this.async();
			config.logger = require("./app/logger.js")(config.loggerConfig);
	    config.app = app(config);
	    httpServer(config);
	});

	grunt.registerTask("default", ["webServer"]);

};
