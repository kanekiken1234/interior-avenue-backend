const mongoose = require('mongoose');
const sofaModelSchema = require('../schemas/desk');

let SofaTable = mongoose.model('Sofa', sofaModelSchema, 'Furniture.Sofa');

module.exports = SofaTable;