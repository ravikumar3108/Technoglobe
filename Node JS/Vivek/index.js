const express = require('express')

//  create a  object 
const app = express()

app.listen(8000,()=>{
    console.log("Server is Created")
})

app.set("view engine" , "ejs")



console.log("Nodeon running ")
//  Api's 
//  get , post , delete , put 

app.get("", (req,res)=>{
    res.render("Home.ejs")
})









