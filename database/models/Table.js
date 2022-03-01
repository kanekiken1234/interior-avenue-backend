const mongoose = require('mongoose');
const bedsModelSchema = require('../schemas/chair');

let TableTable = mongoose.model('Table', bedsModelSchema, 'Furniture.Table');

module.exports = TableTable;