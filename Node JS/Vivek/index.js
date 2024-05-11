const express = require('express')

//  create a  object 
const app = express()

app.listen(8000,()=>{
    console.log("Server is Created")
})

//  Api's 
//  get , post , delete , put 

app.get("", (req,res)=>{
    res.send("Server is run in 8000")
})









