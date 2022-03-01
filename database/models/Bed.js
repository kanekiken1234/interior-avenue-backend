const mongoose = require('mongoose');
const bedsModelSchema = require('../schemas/bed');

let BedTable = mongoose.model('Bed', bedsModelSchema, 'Furniture.Bed');

module.exports = BedTable;