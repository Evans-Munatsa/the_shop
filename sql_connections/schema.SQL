USE the_shop;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS sales;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS shop;


CREATE TABLE Categories(
    id int primary key auto_increment,
    description char(100) NOT NULL
);


create table products(
    id int primary key auto_increment,
    description char(100) not null,
    category_id int,
    foreign key(category_id) references categories(id)
);

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