const mongoose = require('mongoose')
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
    }
});

module.exports = usersModelSchema;

