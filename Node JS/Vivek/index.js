const express = require('express')
//  create a  object 
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jeetu');
}
app.use(express.json())
app.use(cors(corsOptions))
// Create a Schema (Model)

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const users = mongoose.model('jeetukusers', userSchema);

app.post("", (req, res) => {
  console.log(req.body)
  const { user, email, password } = req.body
  const newuser = new users({
    user,
    email,
    password,
  })
  newuser.save()
  res.json({
    status: true,
    user: newuser,
    message: "user created"
  })
})

app.post("/login", async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  const user = await users.findOne({ email })
  res.json({
    loginuser: user
  })
})

app.get("/getusers/:id", async (req, res) => {
  console.log(req.params)
  // const alluser = await users.find({})
  // console.log(alluser)
  // res.json({
  //   status: true,
  //   alluser1: alluser
  // })

})




// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())



// app.set("view engine" , "ejs")
// console.log("Nodeon running ")
//  Api's 
//  get ,post , delete , put 

app.get("", (req, res) => {
  // res.render("Home.ejs") 
  res.send("Message")
})


app.listen(8000, () => {
  console.log("Server is Created")
})








