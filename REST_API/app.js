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

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
  
postData("https://auth.delta.nitt.edu", {
    client_id: "ajaNYGBqSLCeAcvm",
    client_secret: "pp181oQ444EOTGAMeJpc8UmfWWKti1Wx",	
    grant_type: "authorization_code",	
    code: "03a2654445775bb956a694fde0cbbe2c6f1b28c3",
    redirect_uri: "http%3A%2F%2Flocalhost%3A3001%2Fauthenticated%2F"
}).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
});

app.get("/", (req, res) => {
    params = {}
    params.client_id = process.env.CLIENT_ID;
    params.redirect_uri = "http%3A%2F%2Flocalhost%3A3001%2Fauthenticated";
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

app.listen(3001, () => {
    console.log("Server started on PORT 3000");
})