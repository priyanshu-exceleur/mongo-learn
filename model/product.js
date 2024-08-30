const mongoose = require("mongoose")
const { Schema } = mongoose;

const product = new Schema(
    {
        title: String,
    }
);

const Product = mongoose.model('Product', product);

module.exports = Product;