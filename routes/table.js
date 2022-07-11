const express = require('express');
const router = express.Router();
const Utils = require('../utils/utils')
const TableTable = require('../database/models/Table');

router.get('/', async (req, res) => {
    let response = {}
    const id = parseInt(req.query.id);
    let status = 200;
    if (!id) {
        const tableDetails = await Utils.getFurniture(TableTable)
        response = tableDetails
        status = 200;
    }
    else {
        try {
            const item = await Utils.getItemById(id, TableTable);
            status = item.status
            response = item.msg
        }
        catch (e) {
            response = e.msg
            status = e.status
        }
    }
    res.status(status).send(response);
})

module.exports = router;