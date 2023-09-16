import express from "express"
const app = express()
import dotenv from "dotenv"
import ejs from "ejs"
import { createUser, updateUser, findUser, searchUsers } from "./mongoose.js"
import multer from "multer"
import fs, { promises } from "fs"
import util from 'util'

// const readFile = util.promisify(fs.readFile);
const upload = multer({dest: "./uploads"});

// let cssString;
import cssjs from "jotform-css.js"
const parser = new cssjs.cssjs();

async function readFile(filePath) {
    try {

      const data = await fs.readFile(filePath);
      console.log(data.toString());
      return data.toString()

    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  }

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(express.json())

app.get("/", async (req, res) => {
    let cssString;
    fs.readFile(`./uploads/faa95eb1f46f1184c0fdc8b502cc4ad9`, 'utf8', (err, data) => {
        cssString = data
        // const parsed = parser.parseCSS(cssString);
        // return data
        
        console.log(cssString)
        const parsed = parser.parseCSS(cssString);
        console.log("parsed:", parsed);
        
    })
    // const cssString = await readFile(`./uploads/faa95eb1f46f1184c0fdc8b502cc4ad9`)
    res.render("index.ejs")
})

app.post("/upload", upload.single("upload"), async (req, res) => {
    console.log(req.file.filename);
    // fs.open(`./uploads/${req.file.filename}`, 'r', function (err, f) {
    //     console.log(f);
        // fs.readFile(`./uploads/${req.file.filename}`, 'utf8', function(err, data){
            
        //     // Display the file content
        //     console.log(data);
        // });
        // console.log("end")
    
    
    res.redirect("/")
});

app.post("/save", (req, res) => {
  console.log(req.body);

  res.send({ok: true})
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000")
}) 