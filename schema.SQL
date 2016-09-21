USE the_shop;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS shop;

SET FOREIGN_KEY_CHECKS=1;

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Products;
DROP TABLE IF EXISTS Sales;
DROP TABLE IF EXISTS Purchases;
DROP TABLE IF EXISTS Users;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE Categories(
  id INT PRIMARY KEY AUTO_INCREMENT,
  description char(100) NOT NULL,
  CONSTRAINT uc_description UNIQUE (description)
);

CREATE TABLE Products(
  id INT PRIMARY KEY AUTO_INCREMENT,
  description char(100) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories (id),
  CONSTRAINT uc_description UNIQUE (description)
);





-- CREATE TABLE Categories(
--     id int primary key auto_increment,
--     description char(100) NOT NULL,
--     CONSTRAINT uc_description UNIQUE (description)
-- );


-- create table products(
--     id int primary key auto_increment,
--     description char(100) not null,
--     category_id int,
--     CONSTRAINT `FK_id` FOREIGN KEY (`id`) REFERENCES Categories (`id`)
-- );

create table sales(
	id int primary key auto_increment,
	number_sold int,
	total_sales decimal(10, 2),
	products_id int,
	foreign key(products_id) references products(id)
);

create table purchases(
	id int primary key auto_increment,
	shop char(100) not null,
	dates char(100) not null,
	quantity int,
	unit_price decimal(10, 2),
	total_cost decimal(10, 2),
	products_id int,
	foreign key(products_id) references products(id)
);

create table shop(
    id int primary key auto_increment,
    shop_name char(100) not null,
    products_id int,
    foreign key(products_id) references products(id)   	
);