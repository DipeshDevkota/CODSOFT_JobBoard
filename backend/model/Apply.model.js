const mongoose = require('mongoose')
// const {Schema} = mongoose;

const applySchema= new  mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },

    email:
    {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:
    {
        type:Number,
        required:true,
    },
    message:
    {
        type:String,
        required:true,
    },
    file:
    {
        type:String,
        required:true,
    },
})


const Apply = mongoose.model('Apply', applySchema)

module.exports=Apply;

