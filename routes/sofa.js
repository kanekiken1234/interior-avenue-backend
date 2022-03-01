const express = require('express');
const router = express.Router();
const SofaTable = require('../database/models/Sofa');

router.get('/', async (req, res) => {
    let sofaDetails = {};
    const sofas = await SofaTable.find({});
    sofas.forEach(sofa => {
        sofaDetails[sofa.product_id] = {
            "product_name": sofa.product_name,
            "product_price": sofa.product_price,
            "product_3D_model_image": sofa.product_3D_model_images[0]
        }
    })
    res.send(sofaDetails);
})

module.exports = router;