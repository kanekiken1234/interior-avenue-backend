require('dotenv').config()
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();


const users = require('./routes/users');
const user = require('./routes/user');
const bed = require('./routes/bed');
const chair = require('./routes/chair');
const table = require('./routes/table');
const desk = require('./routes/desk');
const sofa = require('./routes/sofa');

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
app.use('/api/beds', bed);
app.use('/api/chairs', chair);
app.use('/api/tables', table);
app.use('/api/desks', desk);
app.use('/api/sofas', sofa);

app.listen(process.env.PORT, function () {
    console.log(`Server started on port ...${process.env.PORT}`);
});
