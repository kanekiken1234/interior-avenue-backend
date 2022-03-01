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
    res.send(chairDetails);
})

module.exports = router;