module.exports = function(config) {

	var
		express = require("express"),
		bodyParser = require("body-parser"),
		multer = require("multer"),
		mongoose = require("mongoose"),
		app = express();

	console.log(config.httpServer.wwwRoot);

	app.use(express.static(config.httpServer.wwwRoot));


		mongoose.connect("mongodb://" +
			config.mongoServer.host + ":" +
			config.mongoServer.port + "/" +
			config.mongoServer.dbName);

	console.log("here1");
	app.use("/api", bodyParser.json());
	app.use("/api",multer({
		dest: "./app/uploads",
		rename: function(fieldName, fileName) {
			return fileName;
		}
	}));

	app.use("/api", require("./routers/donation.js")(config, mongoose));
	app.use("/api", require("./routers/gallery.js")(config, mongoose));
	app.use("/api", require("./routers/content.js")(config, mongoose));

	//app.use("/api", require("./routers/transactions.js")(config, mongoose));

	return app;

};
