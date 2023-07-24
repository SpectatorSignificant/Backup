// const dotenv = require("dotenv");
// dotenv.config();
// const express = require('express');
// const app = express()
// const bcrypt = require('bcrypt');
// const https =require("https");
// const {createPool} =require("mysql2");
// app.use(express.json())
// app.use(express.static("public"));
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
const app = express()
import bcrypt from 'bcrypt';
import https from "https";
import {createPool} from "mysql2";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json())
app.use(express.static("public"));
// const users = []

const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database:"test"
}).promise();

async function runQuery(query){
    var result = await pool.query(query);
    return result[0];
}
// console.log(await runQuery("SHOW DATABASES"));

// pool.query(`SHOW DATABASES`, function(err, result, fields) {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// })

app.get('/', async (req, res) => {
    const users = await runQuery('select * from users');
    res.sendFile(__dirname+"/src/index0.html");
})

app.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await runQuery(`insert into users values("${req.body.name}", "${hashedPassword}");`)
  
  } catch {
  }
})

app.post('/home', async (req, res) => {
  const users = await runQuery('select * from users')
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(3000, () => console.log("Server started on port 3000"));