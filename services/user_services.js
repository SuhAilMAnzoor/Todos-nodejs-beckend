const UserModel = require('../model/user_model')  // import UserModel

class UserServices {
        // Register User with email and password
    static async registerUser(email,password){
         try {
            const createUser = new UserModel({email,password});
            return await createUser.save();
        } catch (error) {
            throw error;
     }
 }

}
module.exports = UserServices;

// Note for folder structre and filing this follows > MVC
// in service we re going to do crud operations over database
// FIRST Routes Then Controller then Services / frontend

// Starting coding with Service then contolloers then Routes

// Note >> How our code execute The Code Follow
// index.js -> app.js -> router -> controller -> service