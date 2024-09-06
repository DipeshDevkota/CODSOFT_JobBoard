const express = require('express');
const { newPost, deletePost, updatePost, allPost } = require('../controller/post');

const router = express.Router();

// Define routes
router.post('/newpost', newPost);
router.delete('/deletepost/:id', deletePost); // Use DELETE method
router.put('/updatePost/:id', updatePost); // Use PUT method
router.get('/allposts', allPost); // Use GET method to fetch all posts

module.exports = router;
