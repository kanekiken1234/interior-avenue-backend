const express = require('express')
const router = express.Router();
const validate = require('../middlewares/validation')
const UserTable = require('../database/models/Users')
const Joi = require('joi')
const jwt = require('jsonwebtoken');

const usersSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    password: Joi.string().min(8).required()
})

router.post('/signup', validate(usersSchema), async (req, res) => {
    const { name, email, phone, password } = req.body
    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        address: "",
        cart: []
    }
    const existingUser = await UserTable.findOne({ email: email })
    console.log(existingUser)
    if (existingUser) {
        return res
            .status(400)
            .send({ error: "A user with the given email already exists." });
    }

    const record = new UserTable(user)
    record.save(function (err, user) {
        if (err) return console.error(err);
        console.log("Record inserted");
    });
    const token = {
        'email': email,
        'phone': phone,
        'name': name
    }
    const accessToken = jwt.sign(token, process.env.JWT_SIGN);
    res.status(201).send(accessToken)
})

module.exports = router;