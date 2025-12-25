const mongoose = require('mongoose'); // import mongoose package
const database = require('../config/database'); // import database connectivity
const bcrypt = require("bcrypt");

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

userSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;
        
    } catch (error) {
        
    }
})

                                //collection name is 'users'
const UserModel = database.model('users', userSchema);

module.exports = UserModel;