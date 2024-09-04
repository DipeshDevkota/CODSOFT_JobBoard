const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({


    job:{
        type:String,
        requird:true,

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
        type:Number,
        required:true,
    },
    opening:{
        type:Number,
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