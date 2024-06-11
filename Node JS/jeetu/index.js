const express = require("express")
// create a object 
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//  create a APIs
// middlewares
app.use(express.json())
app.use(cors(corsOptions))
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


app.post("/signup", async (req, res) => {
    console.log(req.body)
    const { user, email, password } = req.body
    const newuser = await User({
        name: user,
        email: email,
        password: password
    })
    await newuser.save()
    res.json({
        mesage: newuser,
        status: true
    })
})


app.post("/login", async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    const login = await User.findOne({ email })
    res.json({
        login: login,
        status: true
    })
})



// delete 
app.post("/delete/:id", async (req, res) => {
    console.log(req.params.id)
    const idd = req.params.id
    const deluser = await User.deleteOne({ _id: idd }).then((res) => {
        console.log(res)
    })
    res.json({
        mesage: "user deleted",
        deluser1: deluser,
    })
})

//  create a route 
app.listen(8000, () => {
    console.log("Server Creted on 8000")
})

