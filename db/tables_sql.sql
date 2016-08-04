
create table Categories(
    id int primary key auto_increment,
    title TEXT
);


create table products(
    id int primary key auto_increment,
    description char(100) not null,
    price decimal(10, 2),
    category_id int,
    foreign key(category_id) references categories(id)
);

