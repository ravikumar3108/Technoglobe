const express  = require("express")

const app = express()


app.use(express.json())
// get , post , delete ,
app.get("/",(req,res)=>{
    res.json({
        message:"get request",
        data:"jyoti"
    })
})

app.post("/test", async(req,res)=>{
    console.log(req.body)
    res.json({
        message:"post request",
        data:req.body
    })
    
})


app.listen(8000,()=>{console.log("server is startted")})