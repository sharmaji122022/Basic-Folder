const express = require('express');
const { RegisterUserController, LoginUserController } = require('../controllers/user.controller');
const route = express.Router();


route.post('/register', RegisterUserController)
route.post('/login', LoginUserController)

module.exports = route;
