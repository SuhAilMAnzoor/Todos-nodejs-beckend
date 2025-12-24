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
    password:{
        type: String,
        required: true
    }
});

                                //collection name is 'users'
const UserModel = database.model('users', userSchema);

module.exports = UserModel;