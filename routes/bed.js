const express = require('express');
const router = express.Router();
const BedTable = require('../database/models/Bed');

router.get('/', async (req, res) => {
    let bedsDetails = {};
    const beds = await BedTable.find({});
    beds.forEach(bed => {
        bedsDetails[bed.product_id] = {
            "product_name": bed.product_name,
            "product_price": bed.product_price,
            "product_3D_model_image": bed.product_3D_model_images[0]
        }
    })
    res.status(200).send(bedsDetails);
})

router.get('/bed', async (req, res) => {
    const id = parseInt(req.query.id);
    let status = 200;
    let msg = "Success";
    const bed = await BedTable.findOne({ product_id: id });
    if (!bed) {
        status = 401;
        msg = "Invalid Product ID";
    }
    msg = bed;
    res.status(status).send(msg);
})

module.exports = router;