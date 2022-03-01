const mongoose = require('mongoose')
const productSchema = require('./productSchema')
let tableModelSchema = new mongoose.Schema(productSchema);

module.exports = tableModelSchema;
