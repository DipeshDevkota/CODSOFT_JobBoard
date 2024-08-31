const express = require('express');
const {    newPost,
    deletePost,
    updatePost} = require('../controller/post');

const router= express.Router();

router.post('/newpost',newPost);
router.post('/deletepost',deletePost);
router.post('/updatePost',updatePost);
module.exports=router;