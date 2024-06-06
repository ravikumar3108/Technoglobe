const express = require("express")
// create a object 
const app = express()

//  create a APIs

// get , post , delete , put 

app.get("", (req, res) => {
    res.send("helkoo")
    res.json({
        mesage: "sucessfull",
        status: true
    })
    res.status(400).json({ mesage: "sucessfull", })
})



//  create a route 
app.listen(8000, () => {
    console.log("Server Creted on 8000")
})

