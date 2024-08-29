const express= require('express');
const { newapply } = require('../controller/apply');

const router =  express.Router();


router.post('/apply',newapply)