const mongoose = require('mongoose');
const deskModelSchema = require('../schemas/desk');

let DeskTable = mongoose.model('Desk', deskModelSchema, 'Furniture.Desk');

module.exports = DeskTable;