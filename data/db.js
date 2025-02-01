const mongoose = require('mongoose');
require('dotenv').config()

// Connect to MongoDB
const Database = () => {
    mongoose.connect(process.env.MONGODB_API)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error("error connect to mongoDB", err);
        })
}

Database()