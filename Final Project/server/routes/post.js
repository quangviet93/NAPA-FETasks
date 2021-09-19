//auth thực hiện các việc liên quan đến xác thực người dùng(login,logout).
const express = require('express');


// tạo 1 cái routes.
const router = express.Router();

const PostController = require('../controllers/PostController');

router.get('/', PostController.getAllPost);

router.get('/:id', PostController.getPost);

router.post('/create', PostController.addPost);


router.put('/:id', PostController.updatePost)


router.delete('/:id', PostController.deletePost);


module.exports = router;