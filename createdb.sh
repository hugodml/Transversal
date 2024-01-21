#!/bin/bash

DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="gab123456"

MYSQL_CMD="mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD"

$MYSQL_CMD -e "CREATE USER 'transversal' IDENTIFIED WITH mysql_native_password BY 'Aqwxszedc321!!';"

$MYSQL_CMD -e "GRANT all privileges ON transversal.* TO 'transversal'@'%';"

$MYSQL_CMD -e "CREATE DATABASE IF NOT EXISTS transversal;"

$MYSQL_CMD -e "USE transversal;"

$MYSQL_CMD -e "CREATE TABLE IF NOT EXISTS inhabitant(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);"