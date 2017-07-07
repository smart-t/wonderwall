var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

// this is the middle layer, will be executed before any other route 
router.use(function (req,res,next) {
	if( req.url != "/script.js") console.log(req.url);
	next();
});

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
	res.sendFile(path + "contact.html");
});

app.use("/",router);

// when none of the above routes work deliver a not-found message
app.use("*",function(req,res){
	res.sendFile(path + "404.html");
});

app.listen(3000,function(){
	console.log("Listening at Port 3000");
});