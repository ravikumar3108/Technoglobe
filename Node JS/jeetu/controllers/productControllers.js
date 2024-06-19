const Product = require("../models/porductModel")
const fs = require('fs')

const createProducts = async (req, res) => {
    console.log(req.file)

    const product = await Product({
        title: req.body.title,
        des: req.body.des,
        image: {
            data: fs.readFileSync('images/' + req.file.filename),
            contentType: 'images/',
        },
        rating: req.body.rating,
        price: req.body.price
    })
    await product.save()
    res.json({
        mesage: product,
        status: true
    })

}

const getProducts = async (req, res) => {

    const allproducts = await Product.find({})
    res.json({
        products: allproducts
    })
}
const deleteProduct = async (req, res) => {
    console.log(req.params)
    id = req.params.id
    const allproducts = await Product.deleteOne({ _id: id })
}


module.exports = { getProducts, createProducts, deleteProduct }