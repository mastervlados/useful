-- https://onecompiler.com/mysql
-- create
CREATE TABLE EMPLOYEE (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  address TEXT NOT NULL
);


-- insert
INSERT INTO EMPLOYEE VALUES (1001, 'Ivan', '35', 'Moscow');
INSERT INTO EMPLOYEE VALUES (1002, 'Vladislav', '27', 'Saint Petersburg');
INSERT INTO EMPLOYEE VALUES (1003, 'Esenia', '27', 'Saint Petersburg');
INSERT INTO EMPLOYEE VALUES (1004, 'Kate', '20', 'Moscow');
INSERT INTO EMPLOYEE VALUES (1005, 'Maria', '28', 'Saint Petersburg');
INSERT INTO EMPLOYEE VALUES (1005, 'Vera', '29', 'Moscow');