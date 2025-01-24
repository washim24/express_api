
const mongoose =require("mongoose");

const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
},{timestamps:true});

const user =mongoose.model("User",userSchema);

module.exports =user;