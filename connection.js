const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee-tracker database.`)
);

module.exports = connection;
