const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    des: String,
    rating: String,
    price: String,
});


const Product = mongoose.model('products', productSchema);
module.exports = Product