const express= require('express');
const { newapply, deleteapply } = require('../controller/apply');

const router =  express.Router();


router.post('/newapply',newapply)
router.post('/deleteapply',deleteapply)
