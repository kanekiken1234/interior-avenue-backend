function validate(schema) {
    return function (req, res, next) {
        const result = schema.validate(req.body);
        if (result.error) {
            return res.status(400).send({ error: result.error.details[0].message });
        }
        next();
    }
}

module.exports = validate