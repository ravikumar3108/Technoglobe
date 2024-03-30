console.log("heloo")

const express = require("express")
const cors = require('cors')

const app = express()


app.use(cors())

app.use(express.json())
// Api == get , post  


app.get("",(req,res)=>{
    res.json({
        message:"Successful",
        author:"shiv",
        bloodgp : "A+"
    })
})

app.post("",(req,res)=>{
    res.json({
        method:"post",
        message:"Successful",
        author:"shiv",
        bloodgp : "A+"
    })
    console.log(req.body)
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.json({
        message:"aa gya"
    })
})



app.listen(3030,()=>{
    console.log("Server Start on Port 3030")
})

