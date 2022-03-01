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
    res.status(200).send(sofaDetails);
})

router.get('/sofa', async (req, res) => {
    const id = parseInt(req.query.id);
    let status = 200;
    let msg = "Success";
    const sofa = await SofaTable.findOne({ product_id: id });
    if (!sofa) {
        status = 401;
        msg = "Invalid Product ID";
    }
    msg = sofa;
    res.status(status).send(msg);
})

module.exports = router;