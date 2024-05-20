const express = require('express')

//  create a  object 
const app = express()
const bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())

app.use(express.json())


// app.set("view engine" , "ejs")
// console.log("Nodeon running ")
//  Api's 
//  get , post , delete , put 

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








