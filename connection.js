const mysql = require("mysql2");
const chalk = import("chalk");

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_db",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
