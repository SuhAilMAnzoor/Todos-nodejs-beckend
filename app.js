const express = require('express');
const userRouter = require('./routers/user_router');
//
const app = express();

app.use(express.json());

app.use('/', userRouter);

module.exports = app;