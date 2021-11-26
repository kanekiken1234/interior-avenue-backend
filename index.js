require('dotenv').config()
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const users = require('./routes/users');
const user = require('./routes/user');
const DbConnect = require('./database/dbConnection')
const cors = require('cors')

app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

DbConnect();

app.use('/api/users', users);
app.use('/api/user', user);

app.listen(process.env.PORT, function () {
    console.log(`Server started on port ...${process.env.PORT}`);
});
