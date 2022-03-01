const mongoose = require('mongoose')
const productSchema = require('./productSchema')
let bedsModelSchema = new mongoose.Schema(productSchema);

module.exports = bedsModelSchema;
