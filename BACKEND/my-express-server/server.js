const express = require("express");

const app = express();

app.get("/contact", (request, response) => {
     response.send("hellohello");
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});