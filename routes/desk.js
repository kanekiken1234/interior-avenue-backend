const express = require('express');
const router = express.Router();
const DeskTable = require('../database/models/Desk');

router.get('/', async (req, res) => {
    let deskDetails = {};
    const desks = await DeskTable.find({});
    desks.forEach(desk => {
        deskDetails[desk.product_id] = {
            "product_name": desk.product_name,
            "product_price": desk.product_price,
            "product_3D_model_image": desk.product_3D_model_images[0]
        }
    })
    res.status(200).send(deskDetails);
})

router.get('/desk', async (req, res) => {
    const id = parseInt(req.query.id);
    let status = 200;
    let msg = "Success";
    const desk = await DeskTable.findOne({ product_id: id });
    if (!desk) {
        status = 401;
        msg = "Invalid Product ID";
    }
    msg = desk;
    res.status(status).send(msg);
})




module.exports = router;