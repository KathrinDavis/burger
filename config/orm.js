//Import (require) connection.js into orm.js
//it's in the same file?
var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute 
//the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order 
//to retrieve and store data in your database.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

var orm ={
// selectAll()
	selectAll: function(tableName, cb){ 
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableName], function(err, result){
			if(err){ throw err;}
			cb(result);
		});
	},

// insertOne()
	insertOne: function(tableName, cols, vals, cb){
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		console.log(queryString);

		connection.query(queryString, [tableName, cols, vals], function(err, result){
			if(err){throw err;}
			cb(result);
		});
	},

// updateOne()
	updateOne: function(tableName, colVal, boolean, ColName, condition, cb){
		var queryString = "UPDATE ?? SET ??=? WHERE ??=?";

		console.log(queryString);
		connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result){
			if (err){throw err;}
			cb(result);
		});
	}

};
// Export the ORM object in module.exports.
module.exports = orm;
