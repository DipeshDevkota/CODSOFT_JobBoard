const express = require('express');
const { newPost, deletePost, updatePost } = require('../controller/post');

const router = express.Router();

router.post('/newpost', newPost);
router.delete('/deletepost/:id', deletePost); // Use DELETE method
router.put('/updatePost/:id', updatePost); // Use PUT method

module.exports = router;