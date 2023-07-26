const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const { uploadFile, getFileStream, unlinkFile, deleteFile } = require(__dirname + "/s3.js");

const app = express();
const upload = multer({dest: "uploads/"});

app.use(express.static("public"));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    deleteFile("a141e6c35affba89a8fca28dd7769f96");
    res.render("index.ejs");
})

app.get("/images", (req, res) => {
    const key = req.query.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
})

app.post("/images", upload.single("pfp"), async (req, res) => {
    const file = req.file;
    console.log(file);
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log(result);
    res.send("saved");
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
})