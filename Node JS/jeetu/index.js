const express = require("express")
// create a object 
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
//  create a APIs
// middlewares
app.use(express.json())
app.use(cors(corsOptions))
app.use("/users" ,require("./routes/userRoutes"))
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Jignesh');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// delete 
app.post("/delete/:id", async (req, res) => {
    console.log(req.params.id)
    const idd = req.params.id
    const deluser = await User.deleteOne({ _id: idd }).then((res) => {
        console.log(res)
    })
    res.json({
        mesage: "user deleted",
        deluser1: deluser,
    })
})
//  create a route 
app.listen(8000, () => {
    console.log("Server Creted on 8000")
})

