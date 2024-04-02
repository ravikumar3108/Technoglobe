
const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose');


const app = express()
app.use(cors())
app.use(express.json())
// Api == get , post  



// getting-started.js

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shiv');
    console.log("Database Connect (Shiv)")
}


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: String,
    password: String,
});

const User = mongoose.model('user', UserSchema);



app.get("", (req, res) => {
    res.json({
        message: "Successful",
        author: "shiv",
        bloodgp: "A+"
    })
})

app.post("/register", async (req, res) => {
    console.log(req.body)
    const profile = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    await profile.save()
    res.json({
        method: "post",
        data: req.body
    })
    console.log(req.body)
})
app.post("/login", async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body

    const getuser = await User.findOne({ email })
    console.log(getuser.password)
    try {
        if (getuser && getuser.password == password) {
            res.json({
                message: "Succesfull"
            })
        }
    } catch (error) {
      console.log(error)
    }

})


app.listen(3030, () => {
    console.log("Server Start on Port 3030")
})

