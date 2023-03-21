const mysql = require('mysql');
const cos = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "password",
 database: "MYDATA",
});

cos.connect();

// exports = cos;