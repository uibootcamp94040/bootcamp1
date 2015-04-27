module.exports = function(config) {

	var
		express = require("express"),
		bodyParser = require("body-parser"),
		multer = require("multer"),
		mongoose = require("mongoose"),
		session = require("express-session"),
		passport = require("passport"),
		crypto = require("crypto"),
		csrf = require("csrf")(),
		app = express();

	console.log(config.httpServer.wwwRoot);

	passport.serializeUser(function(user, done) {
	done(null, user);
	});

	passport.deserializeUser(function(user, done) {
		done(null, user);
	});

	app.use(session({
		resave: false,
		saveUninitialized: false,
		secret : "asecret"
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	app.use(express.static(config.httpServer.wwwRoot));
	app.set("json replacer", function(key, value) {
		if (key === "__v") {
			return undefined;
		}
		return value;
	});


		mongoose.connect("mongodb://" +
			config.mongoServer.host + ":" +
			config.mongoServer.port + "/" +
			config.mongoServer.dbName);

	//console.log("here1");
	app.use("/api", bodyParser.json());
	//app.use("/api", bodyParser.urlencoded({ extended: true }));

	app.post("/api/accounts/authenticate", function(req, res, next) {

		var user = {
			id: 1,
			name: "Test User",
			username: req.body.username
		};

		req.login(user, function(err) {

			if (err) {
				console.dir(err);
				res.status(500).json(err);
				return;
			}

			csrf.secret().then(function(secret) {
				req.session.csrfSecret = secret;
				res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
				res.json(user);
			});

		});

	});

	app.use("/api", require("./routers/account.js")(config, mongoose));

	app.use("/api", function(req, res, next) {

		if (!req.user) {
			console.log("not a valid user");
			res.status(401).json({
				msg: 'not logged in'
			});
			return;
		}

		// if (!csrf.verify(req.session.csrfSecret, req.get("X-CSRF-Token"))) {
		// 	console.log("not a valid token");
		// 	res.status(401).json({
		// 		msg: 'not logged in'
		// 	});
		// 	return;
		// }

		csrf.secret().then(function(secret) {
			req.session.csrfSecret = secret;
			res.set("X-CSRF-Token", csrf.create(req.session.csrfSecret));
			next();
		});


	});

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
