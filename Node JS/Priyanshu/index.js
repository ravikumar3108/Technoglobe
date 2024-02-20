console.log("heloo")
const express = require('express')
app = express() 
app.listen(5000,(req,res)=>{
    console.log("Crete a server")
})
// Api 
app.get("",(req,res)=>{
    res.send("Send A Response")
})

