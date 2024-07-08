const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors') 

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// middlewares
app.use(express.json())
app.use(cors(corsOptions))

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nancy');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserSch = mongoose.model("users", userSchema)
//  Api's 
// 1. get  


app.get("", (req, res) => {
    res.json({
        message: "runn",
        status: 200
    })
    // res.send("Heloo")
})


app.post("/post", async (req, res) => {
    console.log(req.body)
    const { user, email, password } = req.body
    const newUser = await UserSch({
        name: user,
        email: email,
        password: password,
    })
    const saveUser = await newUser.save()
    res.json({
        message: "post",
        status: 200,
        data: saveUser
    })
    // res.send("Heloo")
})

app.listen(8080, () => {
    console.log("server create")
})

