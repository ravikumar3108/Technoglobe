
const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine','ejs') 
// make a server 
app.use(express.static(__dirname + "/public"))


let fileread = fs.readFileSync("priyanshu.txt","utf-8")
let fileread1 = fs.readFileSync("home.html","utf-8")
console.log(fileread)
console.log(fileread1)

let replace = fileread.replace("hii","heloo")
console.log(replace)


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









