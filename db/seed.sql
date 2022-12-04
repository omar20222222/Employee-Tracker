USE employee_db;
INSERT INTO departments (department_name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');


INSERT INTO roles (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Steve', 'James', 2, null),
('Dani', 'Anderson', 1, 1),
('Omar', 'Abdullahi', 4, null),
('Yusuf', 'Amy', 3, 3),
('Liban', 'Bashir', 6, null),
('Abdurahman', 'Levi', 5, 5),
('Shaffi', 'Ali', 7, null),
('Roy', 'Curvin', 8, 7);

