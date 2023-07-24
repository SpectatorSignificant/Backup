import express from "express"

import {runQuery} from "./database.js"

const app = express();
// const database = database();

app.get('/', async (req, res) => {
    res.send(await runQuery(`SELECT * FROM quizzes where quizcode = ''ermsaytc''`));
    // console.log(await runQuery("SHOW DATABASES"));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});