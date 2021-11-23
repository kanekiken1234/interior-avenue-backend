const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const config = require('./config');
const users = require('./routes/users');
const DbConnect = require('./database/dbConnection')

const { app: { port } } = config;

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

DbConnect();

app.use('/api/users', users);

app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});
