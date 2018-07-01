DROP DATABASE red_db;

CREATE DATABASE red_db;

USE red_db;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	users_name varchar(255) NOT NULL,
	categories_name varchar(255) NOT NULL,
	questions_question varchar(255) NOT NULL,
	questions_answer varchar(255) NOT NULL,
	comments_comments varchar(255) NOT NULL,
	categories_id varchar(255) NOT NULL, 
	question_id varchar(255) NOT NULL,
	author_id varchar(255) NOT NULL,
    owner_id varchar(255) NOT NULL,
    link_id varchar(255) NOT NULL,  
    PRIMARY KEY (id)
);

SELECT * FROM red_db.users;