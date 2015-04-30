module.exports = function(config, mongoose) {

	var
		express = require("express"),
		ContentRouter = express.Router();


	var ContentSchema = mongoose.Schema({
		title: String,
		author: String,
		category: String,
		content: String,
    route: String,
    createdAt: Date,
    updatedAt: Date
	});

	var ContentModel = mongoose.model("Content", ContentSchema);

	ContentRouter.route("/Contents")
		.get(function(req, res) {
			ContentModel.find({}, function(err, Content) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.json(Content);
			});
		});

	ContentRouter.route("/Content")
		.post(function(req, res) {
			var t = new ContentModel(req.body);
      console.dir(req.body);
			t.save(function(err, Content) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.json(Content);
			});
		});

	ContentRouter.route("/Content/:ContentId")
		.get(function(req, res) {
			ContentModel.findById(req.params.ContentId,
				function(err, Content) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(Content);
				});
		})
		.put(function(req, res) {
			ContentModel.findByIdAndUpdate(req.params.ContentId,
				req.body.Content,
				function(err, Content) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(Content);
				});
		})
		.delete(function(req, res) {
			ContentModel.findByIdAndRemove(req.params.ContentId,
				function(err, Content) {
					if (err) {
						console.log(err);
						res.status(500).json(err);
						return;
					}
					res.json(Content);
				});
		});


	return ContentRouter;


};
