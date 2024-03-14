const express  = require("express")

const app = express()

// 

// get , post 
app.get("/",(req,res)=>{
    res.json({
        message:"get request",
        data:"jyoti"
    })
})




app.listen(8000,()=>{console.log("server is startted")})