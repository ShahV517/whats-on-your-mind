const express = require('express');
const { getUser, updateUser, deleteUser } = require('../controllers/user.js');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);


module.exports = router;