const express = require('express')
const router = express.Router()
const Utils = require('../utils/utils')
const UserTable = require('../database/models/Users')

const ChairTable = require('../database/models/Chair');
const DeskTable = require('../database/models/Desk');
const SofaTable = require('../database/models/Sofa');
const BedTable = require('../database/models/Bed');
const TableTable = require('../database/models/Table');

router.post('/add', async (req, res) => {
    try {
        let update = {}
        const { email, itemId } = req.body;
        const filter = { email: email };
        const userDetails = await UserTable.findOne(filter);

        const ifExists = userDetails.cart.some(each => {
            if (each.itemId === itemId)
                return true
        })
        console.log("if exists", ifExists)

        if (!ifExists) {
            let itemQty = {
                itemId: itemId,
                qty: 1
            }
            update = { cart: [...userDetails.cart, itemQty] }
            console.log(update)
        }
        else {
            let cartItems = userDetails.cart.map(each => {
                return (each.itemId === parseInt(itemId)) ? { ...each.toJSON(), qty: each.qty + 1 } : { ...each.toJSON() }
            })
            update = { cart: cartItems }
            console.log(update)
        }
        const cartUpdate = await UserTable.findOneAndUpdate(filter, update, {
            new: true
        })
        console.log(cartUpdate.cart)
        res.status(200).send("Item Added")
    }
    catch (e) {
        console.log(e.message)
        res.status(401).send(e.message)
    }
})


router.post("/remove", async (req, res) => {
    try {
        let update = {}
        let msg = ""
        const { email, itemId } = req.body
        const filter = { email: email }
        const userDetails = await UserTable.findOne(filter);
        const ifExists = userDetails.cart.some(each => {
            if (each.itemId === itemId)
                return true
        })
        console.log("if exists", ifExists)

        if (ifExists) {
            let cartItems = userDetails.cart.filter(each => {
                if (each.qty === 1 && each.itemId === itemId) {
                    return false
                }
                return true;
            }).map(each => {
                return (each.itemId === parseInt(itemId)) ? { ...each.toJSON(), qty: each.qty - 1 } : { ...each.toJSON() }
            })
            update = { cart: cartItems }
            msg = "Item Removed"

            const cartUpdate = await UserTable.findOneAndUpdate(filter, update, {
                new: true
            })
            console.log(cartUpdate.cart)
        }
        else {
            msg = "Nothing To Remove"
        }
        res.status(200).send(msg)
    }
    catch (e) {
        console.log(e.message)
        res.status(401).send(e.message)
    }
})


router.post("/getCart", async (req, res) => {
    try {
        const { email } = req.body
        const filter = { email: email }
        const userDetails = await UserTable.findOne(filter)
        const cartDetails = userDetails.cart.map(async ({ itemId }) => {
            let response = {}
            let itemDetailsNecesasry = {}
            let model = {}
            if (parseInt(itemId / 100) === 1)
                model = TableTable
            else if (parseInt(itemId / 100) === 2)
                model = ChairTable
            else if (parseInt(itemId / 100) === 3)
                model = SofaTable
            else if (parseInt(itemId / 100) === 4)
                model = BedTable
            else if (parseInt(itemId / 100) === 5)
                model = DeskTable
            else
                throw new Error('Item ID Invalid')
            const itemDetails = await Utils.getItemById(itemId, model)
            console.log("item details", itemDetails)
            itemDetailsNecesasry = {
                "product_name": itemDetails.msg.product_name,
                "product_price": itemDetails.msg.product_price,
                "product_3D_model_image": itemDetails.msg.product_3D_model_images[0]
            }
            response = itemDetailsNecesasry
            return response
        })
        res.status(201).send(cartDetails)
    }
    catch (e) {
        console.log(e.message)
        res.status(401).send(e.message)
    }
})

module.exports = router