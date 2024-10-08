const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:String,
    role:String,
},{
    timestamps:true,
})

const User = new mongoose.model('User',userSchema);

module.exports=User;