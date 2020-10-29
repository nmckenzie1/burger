CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id int not null auto_increment primary key,
    burger_name varchar(50) not null,
    devoured BOOLEAN DEFAULT false
)