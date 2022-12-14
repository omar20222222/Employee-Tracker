DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments
(
        id INT
        AUTO_INCREMENT PRIMARY KEY, 
        department_name VARCHAR
        (30)
);

        CREATE TABLE roles
        (
                id INT
                AUTO_INCREMENT PRIMARY KEY, 
                title VARCHAR
                (30),
                salary DECIMAL
                (20,2),
department_id INT,
FOREIGN KEY
                (department_id) REFERENCES departments
                (id) on
                delete CASCADE
);

                CREATE TABLE employees
                (
                        id INT
                        AUTO_INCREMENT PRIMARY KEY,
                        first_name VARCHAR
                        (30) NOT NULL,
last_name VARCHAR
                        (30) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY
                        (role_id) REFERENCES roles
                        (id),
                        
FOREIGN KEY
                        (manager_id)
                        REFERENCES employees
                        (id) on
                        delete
                        SET NULL
                        );