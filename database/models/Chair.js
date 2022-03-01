const mongoose = require('mongoose');
const bedsModelSchema = require('../schemas/chair');

let ChairTable = mongoose.model('Chair', bedsModelSchema, 'Furniture.Chair');

module.exports = ChairTable;