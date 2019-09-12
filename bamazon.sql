DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT (10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, dempartment_name, price, stock_quantity)
VALUES ("oatmeal", "groceries",3.50, 10);
INSERT INTO products (product_name, dempartment_name, price, stock_quantity)
VALUES ("whitebread", "groceries",3.10, 12);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("strawberry","groceries", 2.25, 6);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("toothbrush", "cosmetics",3.50, 30);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("lotion", "cosmetics",6.50, 1);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("painreliever", "pharmacy",3.50, 10);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("sleepaid", "pharmacy",3.50, 3);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("potatochips", "groceries",1.50, 8);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("coke", "groceries",0.70, 10);
INSERT INTO products (Product_name, dempartment_name, price, stock_quantity)
VALUES ("ballons", "seasonal",1.70, 3);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
