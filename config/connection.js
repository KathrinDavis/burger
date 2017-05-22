var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3000,
	user:"localhost",
	user: "root",
	password:"Code2017",
	database:"burgers_db"
});

connection.connect(function(err){
	if(err){
		console.error("error connecting: "+ err.stack);
		return;
	}
	console.log("connected as id "+ connection.threadId);
});

module.exports = connection;