const mongoose = require('mongoose'); // import mongoose package
const database = require('../config/database'); // import database connectivity

// create user Schema 
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    passwoord:{
        type: String,
        required: true
    }
});

                                // database name 'user'
const UserModel = database.model('user', userSchema);

module.exports = UserModel;