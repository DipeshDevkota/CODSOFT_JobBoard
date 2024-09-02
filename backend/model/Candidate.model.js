const mongoose = require('mongoose')

const CandidateSchema= mongoose.Schema({


    _id:{
        type:Number,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true
    }





})


const Candidate = mongoose.model('Candidate',CandidateSchema);

module.exports= Candidate;

