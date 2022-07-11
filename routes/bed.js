const express = require('express');
const router = express.Router();
const BedTable = require('../database/models/Bed');
const Utils = require('../utils/utils')

router.get('/', async (req, res) => {
    let response = {}
    const id = parseInt(req.query.id);
    let status = 200;
    if (!id) {
        const bedsDetails = await Utils.getFurniture(BedTable)
        response = bedsDetails
        status = 200;
    }
    else {
        try {
            const item = await Utils.getItemById(id, BedTable);
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