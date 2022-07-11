const express = require('express');
const router = express.Router();
const Utils = require('../utils/utils')
const DeskTable = require('../database/models/Desk');

router.get('/', async (req, res) => {
    let response = {}
    const id = parseInt(req.query.id);
    let status = 200;
    if (!id) {
        const deskDetails = await Utils.getFurniture(DeskTable)
        response = deskDetails
        status = 200;
    }
    else {
        try {
            const item = await Utils.getItemById(id, DeskTable);
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