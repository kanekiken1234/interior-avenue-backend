const express = require("express");
const router = express.Router();
const validate = require('../middlewares/validation');
const UserTable = require('../database/models/Users')
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const usersSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

router.post("/signin", validate(usersSchema), async (req, res) => {
    const { email, password } = req.body;
    const user = {
        email: email,
        password: password
    }
    const result = await UserTable.findOne(user)
    console.log(result)
    if (!result)
        return res.status(400).send({ error: "Invalid email or password." });

    const token = {
        'email': email
    }
    const accessToken = jwt.sign(token, process.env.JWT_SIGN);
    res.status(201).send(accessToken);
});

module.exports = router