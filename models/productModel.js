const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema({
    title: String,
    description: String,
    price: Number
},
{
    versionKey: false
});

const ProductModel = mongoose.model("Product", Product)

module.exports = ProductModel