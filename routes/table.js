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
    res.status(200).send(tableDetails);
})

router.get('/table', async (req, res) => {
    const id = parseInt(req.query.id);
    let status = 200;
    let msg = "Success";
    const table = await TableTable.findOne({ product_id: id });
    if (!table) {
        status = 401;
        msg = "Invalid Product ID";
    }
    msg = table;
    res.status(status).send(msg);
})

module.exports = router;