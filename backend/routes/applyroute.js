const express= require('express');
const { newapply, deleteapply, allapply } = require('../controller/apply');
const upload = require('../config/multer.js')
const router =  express.Router();


router.post('/deleteapply',deleteapply)
router.get('/allapply',allapply)
router.post('/newapply', upload.single('cv'), newapply);




module.exports= router;