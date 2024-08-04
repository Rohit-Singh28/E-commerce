const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    brandName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        min:0
    },
    sellingPrice:{
        type:Number,
        min:0
    },
    description:{
        type:String
    },
    category:{
        type:String,
        enum:["airpodes","camera","earphones","mobiles","Mouse",
            "printers","processor","refrigerator","speakers","trimmers","televisions","watches"]
        },
    
    productImage:[{
        type:String,
    }],
})


const Product = new mongoose.model('Product',productSchema);

module.exports = Product;