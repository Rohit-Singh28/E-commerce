const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    productInfo: {
        type: Array,
        default: []
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    payment_method_details: {
        type: Object,
        required: true
    },
    payment_method_type: {
        type: String,
        require: true
    },
    payment_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    orderStatus: {
        type: String,
        default: "pending",
        enum:["pending","on the way","deleiverd"]
        
    }
}, {
    timestamps: true
})


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;