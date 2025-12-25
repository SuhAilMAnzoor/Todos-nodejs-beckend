const express = require('express');
const userRouter = require('./routers/user_router');

const app = express();

app.use(express.json());

app.use('/', userRouter);

module.exports = app;

// // in app.js temporarily
// app.post('/test', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });
