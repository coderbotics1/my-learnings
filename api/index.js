import express from "express";
import bodyParser from "body-parser"
import mysql from "mysql2"
const app = express();
import cors from "cors";
// const bodyParser = require("body-parser");
// const mysql = require("mysql2")
// const cors = require("cors");
// import {db} from './db.js'
import dInsert from "./routes/inserts.js"
import dDisplay from "./routes/displays.js"

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/post", dInsert);
app.use("/api/display", dDisplay);

app.listen("8800", () => {
    console.log("Server is running on port 8800")
})