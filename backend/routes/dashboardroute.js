const express = require('express');
const {allCandidate, registerCandidate, loginCandidate} = require('../controller/candidate');
const { userjob } = require('../controller/dashboard.controller');

const router= express.Router();
router.post('/allcandidate',allCandidate) 
router.post('/register',registerCandidate)
router.post('/signin',loginCandidate)
router.post('/apply/:userId/:jobId',userjob )


module.exports= router;

