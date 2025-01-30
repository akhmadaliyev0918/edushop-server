const mongoose = require('mongoose');

// Connect to MongoDB
const Database = () => {
    mongoose.connect('mongodb+srv://akhmadaliyev082:N3T4HUN3YJ@cluster0.d7j3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error("error connect to mongoDB", err);
        })
}

Database()