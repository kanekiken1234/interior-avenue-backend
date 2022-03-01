const mongoose = require('mongoose')
const productSchema = require('./productSchema')
let deskModelSchema = new mongoose.Schema(productSchema);

module.exports = deskModelSchema;
