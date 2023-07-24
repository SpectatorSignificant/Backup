const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const {runQuery} = require(__dirname + "/database.js");

app.use(express.static("public"));
app.use(express.json());

let url, client_id, redirect_uri, response_type, grant_type, state, scope, nonce;
let params, username;
app.get("/", (req, res) => {
    params = {}
    params.client_id = process.env.CLIENT_ID;
    params.redirect_uri = "http%3A%2F%2Flocalhost%3A3000%2Fauthenticated";
    username = req.query.username;
    params.state = username;
    url = "https://auth.delta.nitt.edu/authorize?";
    for (var i = 0; i < Object.keys(params).length; i++){
        url += Object.keys(params)[i] + "=";
        url += params[Object.keys(params)[i]] + "&";
    }
    res.redirect(url);

})

app.get("/authenticated", (req, res) => {
    console.log(req.query);
    res.send("User is authenticated");
})

app.post("/", (req, res) => {
    console.log("POSTED on /", req.body);
    username = req.body.username;
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
})