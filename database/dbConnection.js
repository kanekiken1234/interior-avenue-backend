const mongoose = require('mongoose')

function DbConnect() {
    mongoose.connect('mongodb://localhost:27017/InteriorAvenue', { useNewUrlParser: true });
    var conn = mongoose.connection;
    conn.on('connected', function () {
        console.log('database is connected successfully');
    });
    conn.on('disconnected', function () {
        console.log('database is disconnected successfully');
    })
    conn.on('error', console.error.bind(console, 'connection error:'));
}

module.exports = DbConnect