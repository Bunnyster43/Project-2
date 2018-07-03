DROP DATABASE red_db;

CREATE DATABASE red_db;

DROP TABLE users;

USE red_db;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	category varchar(255) NOT NULL,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	comment varchar(255) NOT NULL,
	category_id varchar(255) NOT NULL, 
	question_id varchar(255) NOT NULL,
	answer_id varchar(255) NOT NULL,
	author_id varchar(255) NOT NULL,
    owner_id varchar(255) NOT NULL,
    link_id varchar(255) NOT NULL,  
    PRIMARY KEY (id)
);

SELECT * FROM red_db.users;