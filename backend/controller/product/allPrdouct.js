const productModel = require('../../model/product');
const CustomError = require('../../utils/customError');

const allProduct = async(req,res) => {
    const data = await productModel.find({});
    if(!data){
         throw new CustomError(400,"data not found...")
    }
    res.status(200).json({
        success:true,
        error:false,
        message:"Data Found",
        data:data
    })

}

module.exports = allProduct;