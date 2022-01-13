CREATE DATABASE slice;
--\l            (to list all the databases)
--\c pernstack  (to connect to a particular database)
--\dt           (to view the tables in the database)

create table jobs(
    job_id serial primary key,
    company varchar(255),
    position varchar(255),
    position_type varchar(255),
    typical_pay int,
    location varchar(255),
    application_link varchar(500),
    logo_link varchar(255)
);


create table users(
    user_id serial primary key,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    phone_number int,
    application_link varchar(255)
);