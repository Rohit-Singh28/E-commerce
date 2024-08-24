const cartModel = require("../../model/cart");
const CustomError = require("../../utils/customError");

const deleteCart = async(req,res,next) => {
    const {id} = req.params;
    
    const cart = await cartModel.findById(id);
    if(!cart){
        return next(new CustomError(400,"Product not found in cart"));
    }
    const response = await cartModel.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        error:false,
        data:response,
        message:"Product Deleted !"
    })
}

module.exports = deleteCart;