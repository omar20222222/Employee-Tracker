const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./connection.js");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "quest",
        message: "What would you like to do",
        choices: [
          "View all departments",
          "add department",
          "view all roles",
          "add role",
          "view all employee",
          "add employee",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.quest) {
        case "View all departments":
          const sql = `SELECT * FROM departments`;
          db.query(sql, (err, rows) => {
            if (err) {
              console.log(err);
              return;
            }
            console.table(rows);
            promptUser();
          });
          break;
        case "add department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "departname",
                message: "Please enter your department name",
              },
            ])
            .then((answers) => {
              const sql = `INSERT INTO departments (department_name)
        VALUES (?)`;
              const params = [answers.departname];
              db.query(sql, params, (err, result) => {
                if (err) {
                  console.log(err);
                  return;
                }
                console.log("Department added");
                promptUser();
              });
            });
          break;

        case "view all roles":
          const sqlRoles = `SELECT * FROM roles`;

          db.query(sqlRoles, (err, rows) => {
            if (err) {
              return;
            }
            console.table(rows);
            promptUser();
          });
          break;
        case "add role":
          inquirer
            .prompt([
              {
                type: "input",
                name: "title",
                message: "Please enter your title",
              },
              {
                type: "input",
                name: "salary",
                message: "Please enter your salary",
              },
              {
                type: "list",
                name: "departmentId",
                message: "Please enter department",
                choices: [
                  { name: "IT", value: 1 },
                  { name: "Finance & Accounting", value: 2 },
                  { name: "Sales & Marketing", value: 3 },
                  { name: "Operations", value: 4 },
                ],
              },
            ])
            .then((answers) => {
              const sql = `INSERT INTO roles (title, salary , department_id)
            VALUES (?,?,?)`;
              const params = [
                answers.title,
                answers.salary,
                answers.departmentId,
              ];
              console.log(params);
              db.query(sql, params, (err, result) => {
                if (err) {
                  return;
                }
                console.log("Role added");
                promptUser();
              });
            });
          break;
        case "view all employee":
          const sqlEmployee = `SELECT * FROM employees`;

          db.query(sqlEmployee, (err, rows) => {
            if (err) {
              return;
            }
            console.table(rows);
            promptUser();
          });
          break;
        case "add employee":
          inquirer
            .prompt([
              {
                type: "input",
                name: "firstname",
                message: "Please enter your first name",
              },
              {
                type: "input",
                name: "lastname",
                message: "Please enter your last name",
              },
              {
                type: "list",
                name: "role",
                message: "Please enter your employee role ",
                choices: [
                  { name: "Full Stack Developer", value: 1 },
                  { name: "Accountant", value: 3 },
                  { name: "Sales Lead", value: 6 },
                  { name: "Project Manager", value: 7 },
                ],
              },
              {
                type: "list",
                name: "managerId",
                message: "Please enter your boss id",
                choices: [
                  { name: "Steve James", value: 1 },
                  { name: "Omar Abdullahi", value: 3 },
                  { name: "liban bashir", value: 5 },
                ],
              },
            ])
            .then((answers) => {
              const { firstname, lastname, role, managerId } = answers;
              const sql = `INSERT INTO employees (first_name, last_name , role_id, manager_id)
                      VALUE (?,?,?,?)`;

              const params = [
                firstname,
                lastname,
                parseInt(role, 10),
                parseInt(managerId, 10),
              ];

              db.query(sql, params, (err, result) => {
                if (err) {
                  console.log(err);

                  return;
                }
                console.log("Employee added");
                promptUser();
              });
            });
          break;
        case "Exit":
          db.end();
          break;
        default:
          break;
      }
    });
};

promptUser();
