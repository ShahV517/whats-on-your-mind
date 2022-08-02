const express = require('express');
const { getUser, updateUser, deleteUser } = require('../controllers/user.js');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getUser);
router.put('/', verifyToken, updateUser);
router.delete('/', verifyToken, deleteUser);


module.exports = router;