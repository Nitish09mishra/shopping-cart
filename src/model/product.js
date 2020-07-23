const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

const product = mongoose.model('product', productSchema)
module.exports = product