
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/index.html");
});

router.get("/info",function(req,res){
	    res.sendFile(__dirname + "/public/views/info.html");
});


let fileName = "";
//router.post('/change', function(req, res){
//		res.json(null);
//});

router.post('/fileupload', function(req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      console.log(files.filetoupload.path);
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/public/images/' + files.filetoupload.name;

      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        fileName = files.filetoupload.name;
//	    res.sendFile(__dirname + "/public/views/index.html");
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});

router.get('/info2', function(req, res){
	res.json({filename:fileName});
});

module.exports = router;

