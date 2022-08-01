const express = require('express');
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/post.js');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();


router.get('/', verifyToken, getPosts);
router.post('/', verifyToken, createPost);
router.get('/:id', verifyToken, getPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

module.exports = router;