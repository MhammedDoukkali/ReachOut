const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;

const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const createClient = (dbName) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db(dbName);
    return { client, db }
}

module.exports = {createClient}