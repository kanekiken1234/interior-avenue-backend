const express = require('express');
const router = express.Router();
const ChairTable = require('../database/models/Chair');

router.get('/', async (req, res) => {
    let chairDetails = {};
    const chairs = await ChairTable.find({});
    chairs.forEach(chair => {
        chairDetails[chair.product_id] = {
            "product_name": chair.product_name,
            "product_price": chair.product_price,
            "product_3D_model_image": chair.product_3D_model_images[0]
        }
    })
    res.status(200).send(chairDetails);
})

router.get('/chair', async (req, res) => {
    const id = parseInt(req.query.id);
    let status = 200;
    let msg = "Success";
    const chair = await ChairTable.findOne({ product_id: id });
    if (!chair) {
        status = 401;
        msg = "Invalid Product ID";
    }
    msg = chair;
    res.status(status).send(msg);
})


module.exports = router;