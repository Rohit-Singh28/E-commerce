const productModel = require('../../model/product')

const productDetail = async(req,res) => {
    const {productId} = req?.params;

    const data = await productModel.findById(productId);
    if(!data){
        res.json({
            success:false,
            error:true,
            data:[],
            message:"Product not found.."
        })
    }
    res.json({
        success:true,
        error:false,
        data:data,
        message:"Product detail found.."
    })
}

module.exports = productDetail;