const mongoose = require('mongoose')

const CandidateSchema= mongoose.Schema({

    fullname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    phoneno





})


const Candidate = mongoose.model('Candidate',CandidateSchema);

module.exports= Candidate;

