
const express = require('express')
const app = express()

app.set('view engine','ejs') 
// make a server 
app.use(express.static(__dirname + "/public"))


app.get("",(req,res)=>{
    res.send("hleo priyanshu")
})

app.get("/home",(req,res)=>{
    res.render("Home")
})

console.log("hii")
app.listen(5000,()=>{
    console.log("server crtera")
})







