module.exports = function(config, mongoose) {
  "use strict";

	var
		express = require("express"),
    passport = require("passport"),
    crypto = require("crypto"),
		AccountRouter = express.Router();

	var AccountSchema = mongoose.Schema({
		username: String,
		password: String
	});

	var AccountModel = mongoose.model("accounts", AccountSchema);

  // var test = new AccountModel({username: "test1", password: "424578d239f80d9006ab334095b12104018bcd20"});
  // test.save(function(err, test) {
  //   console.log(err);
  //   console.log(test);
  //   console.log("saved");
  // });
  //
  // AccountModel.find({}, function(err, accounts) {
  //   console.log(err);
  //   console.dir(accounts.toString());
  // });

	AccountRouter.route("/account/authenticate")
		.post(function(req, res) {
      console.log("auth1");
      function sha1(value) {
        return crypto.createHash("sha1").update(value.toString()).digest("hex");
      }

      var passwordSalt = "salt is good for you";

      var pwd = sha1(req.body.password + passwordSalt);
      var inputUser = {
        username:req.body.username
      };
      // var inputUser = {
      //   username:req.body.username,
      //   password:pwd
      // };
      console.dir(inputUser);
      //console.log("pswd:"+pwd);
      AccountModel.find({}, function(err, account) {
        console.dir(account);
        if(err) {
          res.send(500);
          return;
        } else if(!account) {
          res.send(401);
          return;
        }
        console.dir(account);
        // user validated
        var user = {
          id:account.id,
          username:account.username
        };
        console.log("auth3");
        req.login(user, function(err) {
    			if (err) {
    				console.dir(err);
    				res.status(500).json(err);
    				return;
    			}
          console.log("auth4");
    			res.json(user);
      	});
      });
		});


	return AccountRouter;
};
