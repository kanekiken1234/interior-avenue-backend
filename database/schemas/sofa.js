const mongoose = require('mongoose')
const productSchema = require('./productSchema')
let sofaModelSchema = new mongoose.Schema(productSchema);

module.exports = sofaModelSchema;
