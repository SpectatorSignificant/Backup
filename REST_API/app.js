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
let params, username, code;

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response; 
}
  
// postData("https://auth.delta.nitt.edu", {
//     client_id: "ajaNYGBqSLCeAcvm",
//     client_secret: "pp181oQ444EOTGAMeJpc8UmfWWKti1Wx",	
//     grant_type: "authorization_code",	
//     code: "03a2654445775bb956a694fde0cbbe2c6f1b28c3",
//     redirect_uri: "http%3A%2F%2Flocalhost%3A3001%2Fauthenticated%2F"
// }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });

app.get("/", (req, res) => {
    params = {}
    params.client_id = process.env.CLIENT_ID;
    params.redirect_uri = "http%3A%2F%2Flocalhost%3A3000%2Fauthenticated";
    params.scope = "openid"
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
    code = req.query.code
    console.log({code})
    res.send("User is authenticated");
})

app.get("/token", (req, res) => {
    params = {}
    params.client_id = process.env.CLIENT_ID;
    params.client_secret = process.env.CLIENT_SECRET;
    params.code = code;
    params.grant_type = "authorization_code"
    params.redirect_uri = "http://localhost:3000/authenticated";
    // username = req.query.username;
    params.state = username;
    // url = "https://auth.delta.nitt.edu/api/oauth?";
    // for (var i = 0; i < Object.keys(params).length; i++){
    //     url += Object.keys(params)[i] + "=";
    //     url += params[Object.keys(params)[i]] + "&";
    // }
    // console.log({url})
    console.log({params})
    postData("https://auth.delta.nitt.edu/api/oauth/token/", params)
    res.redirect(url);
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
})