module.exports = function(config, mongoose) {

	var
		express = require("express"),
		donationRouter = express.Router();


	var donationSchema = mongoose.Schema({
		amount: String,
		paymentMethod: String,
		creditCardNumber: String,
		expDate: String,
		cvvCode: Number,
    address: String,
    name: String,
    comment: String
	});

	var DonationModel = mongoose.model("donation", donationSchema);

	donationRouter.route("/donations")
		.get(function(req, res) {
			DonationModel.find({}, function(err, donation) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.json(donation);
			});
		});

	donationRouter.route("/donation")
		.post(function(req, res) {
			var t = new DonationModel(req.body.donation);
      console.dir(req.body);
			t.save(function(err, donation) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.json(donation);
			});
		});

	donationRouter.route("/donation/:donationId")
		.get(function(req, res) {
			DonationModel.findById(req.params.donationId,
				function(err, donation) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(donation);
				});
		})
		.put(function(req, res) {
			DonationModel.findByIdAndUpdate(req.params.donationId,
				req.body.donation,
				function(err, donation) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(donation);
				});
		})
		.delete(function(req, res) {
			DonationModel.findByIdAndRemove(req.params.donationId,
				function(err, donation) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(donation);
				});
		});


	return donationRouter;


};
