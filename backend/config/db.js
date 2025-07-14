const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((con) => {
        console.log('MongoDB connected to host:'+con.connection.host);
    })
};

module.exports = connectDatabase;