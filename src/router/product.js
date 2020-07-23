const express = require('express')
const Product = require('../model/product')
const router = new express.Router()

// GET home page....
router.get('' , (req, res) => {
    Product.find((err, docs) => {
        var productChunk = []
        var chunkSize = 3
        for(var i=0; i<docs.length; i+=chunkSize) {
            productChunk.push(docs.slice(i,i+chunkSize))
        }
        res.render('index', {products: productChunk})
})
})


// exporting router to app.js....
module.exports = router