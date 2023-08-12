import express from "express"
const app = express()
import dotenv from "dotenv"
import ejs from "ejs"
import { createUser, updateUser, findUser, searchUsers } from "./mongoose.js"

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000")
}) 