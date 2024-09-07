const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema({




    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    appliedJobs: [{ 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Post' }] 





})


const Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = Candidate;

