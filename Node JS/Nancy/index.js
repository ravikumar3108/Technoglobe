const express = require('express')
const app = express()

// middlewares
app.use(express.json())

//  Api's 
// 1. get  

app.get("", (req, res) => {
    res.json({
        message: "runn",
        status: 200
    })
    // res.send("Heloo")
})


app.post("/post", (req, res) => {
    console.log(req.body)
    res.json({
        message: "post",
        status: 200
    })
    // res.send("Heloo")
})



app.listen(8080, () => {
    console.log("server create")
})

