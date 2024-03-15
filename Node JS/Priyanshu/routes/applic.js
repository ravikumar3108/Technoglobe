const express = require('express')
const router = express.Router()
const {getUser ,createUser} = require("../controllers/userController")

router.post("/",createUser)
router.get("/",getUser)

module.exports = router 
