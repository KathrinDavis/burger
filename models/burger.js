// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");
var express= require("express");
var app = express();
// Also inside burger.js, create the code that will 
//call the ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(vals, cb){
		orm.insertOne("burgers", "burger_name", vals, function(res){
			cb(res);
		});
	},

	updateOne: function(condition, cb){
		orm.updateOne('burgers', 'devoured', '1', 'id', condition, function(res){
			cb(res);
		});
	}
};

// Export at the end of the burger.js file.
module.exports = burger;
