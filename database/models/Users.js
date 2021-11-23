const mongoose = require('mongoose')
const usersModelSchema = require('../schemas/users')

let UserTable = mongoose.model('Users', usersModelSchema, 'Users');

module.exports = UserTable;