module.exports = function(config, mongoose) {

  var
    express = require("express"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    fs = require('fs'),
    app = express(),
    logger = config.logger,
    galleryRouter = express.Router();

  app.use(express.static(config.httpServer.wwwRoot));



  // app.use("/api", bodyParser.json());
  // app.use("/api", require("./router/gallery.js")(config));

  var gallerySchema = mongoose.Schema({
    fileName: String,
    data: Buffer
  });

  logger.info("in gallery 1");
  var GalleryModel = mongoose.model("gallery", gallerySchema);

  galleryRouter.route("/gallery")
  .get(function(req, res){
    GalleryModel.find({}, function(err, galleries){

      if(err){
        console.log(err);
        res.status(500).json(err);
        return;
      }

      res.json(galleries);
    });
  });
  galleryRouter.route("/gallery")
  .post(function(req, res) {

    fs.readFile(req.files["file_0"].path, function(err, data){
    var fileMeta = {};
    fileMeta.fileName = req.files["file_0"].originalname;
    fileMeta.data = data;

    var t = new GalleryModel(fileMeta);
    t.save(function(err, gallery){

    if(err){
      console.log(err);
      res.status(500).json(err);
      return;
    }
    res.json(gallery);
    });
  });

  });


  return galleryRouter;

}
