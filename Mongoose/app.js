const mongoose = require("mongoose");

const url = 'mongodb://localhost/testDB';

mongoose.connect('mongodb://127.0.0.1/testDB')

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model("User", userSchema);

async function run(){
    // await mongoose.connect(url, {useNewUrlParser: true});
    
    const user  = await User.create({username: "user1", password: "pass1"})
    await user.save()
    console.log(user);
}