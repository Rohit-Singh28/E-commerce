const cartModel = require("../../model/cart");
const CustomError = require("../../utils/customError");

const updateCart = async(req,res,next) => {
    const {id} = req.params;
    const {quantity} = req.body;
    console.log(quantity);
    
    const cart = await cartModel.findById(id);
    if(!cart){
        return next(new CustomError(400,"Product not found in cart"));
    }
    const response = await cartModel.findByIdAndUpdate(id,{quantity});
    res.status(200).json({
        success:true,
        error:false,
        data:response,
        message:"Product quantity updated !"
    })
}

module.exports = updateCart;