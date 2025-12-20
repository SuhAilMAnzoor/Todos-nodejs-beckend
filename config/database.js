const mangoose = require('mongoose');

const connection = mangoose.createConnection('mongodb://127.0.0.1:27017/TodosBackend').on('open', ()=> {
    console.log("MongoDB Connected");
}).on('error', ()=> {
    console.log("MongoDB connection error");
});

module.exports = connection;