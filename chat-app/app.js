// import express from "express";
// import bodyParser from "body-parser";
// import request from "request";

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// function callback(port){
//     console.log(`Server started on port ${port}`);
// }
// var port = 3000;
// app.listen(port, callback(port));
// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
import express from "express";
import bodyParser from "body-parser";
import request from "request";
const PORT = 3000;
let app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// express().use(express.static("local"));
// express().use(bodyParser.urlencoded({extended: true}));

// express().post("/", (req, res) => {
//     email = req.body.email;
//     password = req.body.password;
//     repeatPassword = req.body.repeatPassword;
//     console.log(email, password, repeatPassword);
// });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
    console.log("hello");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});