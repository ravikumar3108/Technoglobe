const express = require("express")
// create a object 
const app = express()
const mongoose = require('mongoose')
//  create a APIs

// middlewares
app.use(express.json())



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Jignesh');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('users', userSchema);







// get , post , delete , put 
app.get("", (req, res) => {
    // res.send("helkoo")
    res.json({
        mesage: "sucessfull",
        status: true
    })
    // res.status(400).json({ mesage: "sucessfull", })
})

app.post("", async (req, res) => {

    const { name, email, password } = req.body
    const user = await User({
        name: name,
        email: email,
        password: password
    })
    await user.save()
    res.json({
        mesage: user,
        status: true
    })
})


//  create a route 
app.listen(8000, () => {
    console.log("Server Creted on 8000")
})

