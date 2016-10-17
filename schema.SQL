USE the_shop;

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS shop;
SET FOREIGN_KEY_CHECKS=1;


CREATE TABLE Categories(
  id INT PRIMARY KEY AUTO_INCREMENT,
  description char(100) NOT NULL,
  CONSTRAINT uc_description UNIQUE (description)
);


CREATE TABLE products(
  id INT PRIMARY KEY AUTO_INCREMENT,
  description char(100) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories (id),
  CONSTRAINT uc_description UNIQUE (description)
);


create table sales(
	id int primary key auto_increment,
	dates DATE not null,
	number_sold int,
	total_sales decimal(10, 2),
	products_id int,
	foreign key(products_id) references products(id)
);

create table purchases(
	id int primary key auto_increment,
	shop char(100) not null,
	dates DATE not null,
	quantity int,
	unit_price decimal(10, 2),
	total_cost decimal(10, 2),
	products_id int,
	foreign key(products_id) references products(id)
);

CREATE TABLE Users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name char(100) NOT NULL,
	email char(100),
	password char(100) NOT NULL,
	confirmPassword char(100) NOT NULL
);
