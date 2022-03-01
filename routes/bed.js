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
    res.send(bedsDetails);
})

module.exports = router;