
const express = require('express')
const app = express()
const fs = require('fs')
const bodyparser = require('body-parser')
app.set('view engine', 'ejs')
const mongoose = require('mongoose');

const { MongoClient } = require('mongodb')
//  const {MongoClient} = require('mongodb')
// const exp = require('constants')

const connect = new MongoClient('mongodb://0.0.0.0:27017')

//  async function mongoData(){
//     let con = await connect.connect()
//     let data = connect.db("Priyanshu")
//     let collection = data.collection("pappu")
//     let alldata = await collection.find({}).toArray()
//     console.log(alldata)
// }
// mongoData()
let urlencoded = bodyparser.json()
let urlencoded1 = bodyparser.urlencoded({})



app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/login", (req, res) => {
    res.render("login")
})

app.post("/login", urlencoded1, async (req, res) => {
    let con = await connect.connect()
    let data = connect.db("Priyanshu")
    let collection = data.collection("pappu")
    collection.find({ "first": req.body.first, "last": req.body.last, "password": req.body.password }).toArray()
    .then(result=>{
        if(result.length>0)
        res.redirect('home');
        else
        res.send('invalid data')
     })

    // console.log(req.body)
})

app.post("/signup", urlencoded1, async (req, res) => {
    let con = await connect.connect()
    let data = connect.db("Priyanshu")
    let collection = data.collection("pappu")
    collection.insertOne(req.body)
})

app.use(express.json())
app.use("/app/user", require("./routes/applic"))










// make a server 
// app.use(express.static(__dirname + "/public"))
//  body-parser :- this module is used to send data from the server
// let fileread = fs.readFileSync("priyanshu.txt","utf-8")
// let fileread1 = fs.readFileSync("home.html","utf-8")
// console.log(fileread)
// console.log(fileread1)

// // let replace = fileread.replace("hii","heloo")
// // console.log(replace)


// app.get("",(req,res)=>{
//     res.send("hleo priyanshu")
// })

// app.get("/home",(req,res)=>{
//     res.render("Home")
// })

// app.get("/login",(req,res)=>{
//     res.render("login")
// })

console.log("hii")
app.listen(5000, () => {
    console.log("server crtera")
})





