const express = require('express')
const app = express()
const mongoose = require('mongoose');

// middlewares
app.use(express.json())
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

const user = mongoose.model("users", userSchema)
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
    const { name, email, password } = req.body
    const newUser = await user({
        name: name,
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

