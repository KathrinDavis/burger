// import the following:
// Express
// burger.js
var express = require("express");
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

router.get("/", function(req, res){
	burger.selectAll(function(data){
		// var hbsObject = {
		// 	burger: data
		// };
		// console.log(hbsObject);
		res.render("index", {burgers:data});
	});
});

router.post("/", function(req, res){
	burger.insertOne(
		// ["burger_name", "devoured"], 
		// [req.body.burger_name, req.body.devoured],
		req.body.burger_name,
		function(){res.redirect("/");}
	);
});

router.put("/:id", function(req, res){
	// var condition = "id = "+req.prams.id;
	// console.log("condition", condition);
	burger.updateOne(req.prams.id,
		// {devoured: req.body.devoured},
		// condition, 
		function(){res.redirect("/");}
	);
});

module.exports = router;