const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    itemId: {
        type: Number
    },
    qty: {
        type: Number
    }
})

module.exports = cart;