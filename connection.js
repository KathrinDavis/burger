var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWS_URL);
}else{
		connection = mysql.createConnection({
		user:"localhost",
		user: "root",
		password:"Code2017",
		database:"burgers_db"
	});
};


connection.connect();
module.exports = connection;