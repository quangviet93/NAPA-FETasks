//auth thực hiện các việc liên quan đến xác thực người dùng(login,logout).
const express = require('express');


// tạo 1 cái routes.
const router = express.Router();

const UserController = require('../controllers/UserController');


router.get('/:username', UserController.getUser);

router.post('/register', UserController.register);

router.post('/login', UserController.login);


module.exports = router;