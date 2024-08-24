const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    p_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    u_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    quantity:{
        type:Number,
        default:1
    }
    
},{
    timestamps:true
})

const Cart = new mongoose.model("Cart" , cartSchema);

module.exports = Cart;