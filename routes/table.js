const express = require('express');
const router = express.Router();
const TableTable = require('../database/models/Table');

router.get('/', async (req, res) => {
    let tableDetails = {};
    const tables = await TableTable.find({});
    tables.forEach(table => {
        tableDetails[table.product_id] = {
            "product_name": table.product_name,
            "product_price": table.product_price,
            "product_3D_model_image": table.product_3D_model_images[0]
        }
    })
    res.send(tableDetails);
})

module.exports = router;