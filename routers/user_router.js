// Create API
const router = require('express').Router();
const UserController = require('../controllers/user_controller');


router.post('/registration', UserController.register);

module.exports = router;

console.log("✅ user_router loaded");

// now define this API in app.js file



// Note,  for folder and filing structure what we do each folder
// define the routes for login and register or whatever
// API

// Note >> How our code execute The Code Follow
// index.js -> app.js -> router -> controller -> service

