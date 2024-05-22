const express = require('express')
//  create a  object 
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jeetu');
}

// Create a Schema (Model)

const userSchema = new mongoose.Schema({
    username: String,
    email:String,
    password:String
  });

  const users = mongoose.model('users', userSchema);




app.use(express.json())

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

app.post("", (req, res) => {
    console.log(req.body)
})






app.listen(8000, () => {
    console.log("Server is Created")
})








