const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
    try {
        mongoose.connect("mongodb://" + process.env.COSMOS_HOST + ":" + process.env.COSMOS_PORT + "/" + process.env.COSMOS_DB + "?ssl=true&replicaSet=globaldb", {
            auth: {
                user: process.env.COSMOS_DB,
                password: process.env.COSMOS_KEY
            },
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: false
        });
        return console.log('Connection to CosmosDB successful');
    } catch (err) {
        return console.error(err);
    }
}

module.exports = {
    connect,
    mongoose
};