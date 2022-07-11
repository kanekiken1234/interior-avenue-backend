const mongoose = require('mongoose')

const cartSchema = require('./cart')

let usersModelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    cart: [cartSchema]
});

module.exports = usersModelSchema;

