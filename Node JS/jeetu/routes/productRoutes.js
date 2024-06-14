const express = require('express')
const router = express.Router()
const { createProducts, getProducts ,deleteProduct} = require("../controllers/productControllers")

router.post("/createproducts", createProducts)
router.get("/getproducts", getProducts)
router.post("/delete/:id", deleteProduct)


module.exports = router