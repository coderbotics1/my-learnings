import express from "express";
import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySql$186!P",
    database: "crud_contact"
})