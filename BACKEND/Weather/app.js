const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", (req, res) => {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=dbb6c6ac0341505e35aba98f803dd41b";
    https.get(url, (response) => {
        console.log(response.statusCode);
        // res.sendStatus(response.statusCode)
        // res.send(response);
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });
    res.sendFile(__dirname + "/src/ind.html");
});

app.post("/", (req, res) => {
    res.send("Thanks");
    console.log(req.body);
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});