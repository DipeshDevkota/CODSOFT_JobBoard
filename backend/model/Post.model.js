const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({


    job:{
        type:String,
        required:true,

    },
    position:
    {
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    deadline:{
        type:String,
        required:true,
    },
    opening:{
        type:String,
        required:true,
    },
    requirement:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    }
})


const Post = mongoose.model('Post', PostSchema)


module.exports=Post;