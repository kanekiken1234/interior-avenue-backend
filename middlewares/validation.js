function validate(schema) {
    return function (req, res, next) {
        console.log('From validation', req.body)
        const result = schema.validate(req.body);
        if (result.error) {
            console.log(result)
            return res.status(400).send({ error: result.error.details[0].message });
        }
        next();
    }
}

module.exports = validate