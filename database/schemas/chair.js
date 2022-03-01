const mongoose = require('mongoose')
const productSchema = require('./productSchema')
let chairModelSchema = new mongoose.Schema(productSchema);

module.exports = chairModelSchema;
