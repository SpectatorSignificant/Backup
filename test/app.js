const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
const bodyParser = require("body-parser");
// const exp = require("constants");
const {generate} = require("random-words");
// const postJSON = require(__dirname + "/public/script.js");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.json());


async function postJSON(route, data) {
    try {
      const response = await fetch("https://auth.delta.nitt.edu" + route, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const result = JSON.stringify(response);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

let data = {
    "client_id": "ajaNYGBqSLCeAcvm",
    "grant_type": "authorization_code",	
    "code": "ef89c69f3c260dad44f506813e60e8ad64806a0b",
    "redirect_uri": "http%3A%2F%2Flocalhost%3A3000%2Fauthenticated%2F"
}

app.get("/", (req, res) => {
  try{
    postJSON("/api/resources/user", data);
  }
  catch{
    console.log("Error");
  }
    res.render("index.ejs");
});


app.get("/test", (req, res) => {

});


app.post("/", (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
});