const express = require("express")
// create a object 
const app = express()
//  create a APIs


// middlewares
app.use(express.json())


// get , post , delete , put 
app.get("", (req, res) => {
    // res.send("helkoo")
    res.json({
        mesage: "sucessfull",
        status: true
    })
    // res.status(400).json({ mesage: "sucessfull", })
})

app.post("", (req, res) => {
    console.log(req.body)
    res.json({
        mesage: "post request",
        status: true
    })
})


//  create a route 
app.listen(8000, () => {
    console.log("Server Creted on 8000")
})

