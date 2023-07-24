const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("local"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", (req, res) => {
    email = req.body.email;
    password = req.body.password;
    repeatPassword = req.body.repeatPassword;
    console.log(email, password, repeatPassword);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
    console.log(req);
});

app.listen(3000, () => {
    console.log("Server started on port 3000")
});

// console.log(req);
