var mysql = require('mysql2');

let res ;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "MYDATA"
});

const sql = "SELECT * FROM Persons";

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      res = result ;
      console.log("Result: " + result);
    });
  });