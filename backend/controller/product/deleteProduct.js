const productModel = require("../../model/product")

const deleteProduct = async(req,res) => {
    const {_id} = req?.body ;
    console.log(req.params);
    const product = await productModel.findById(_id);

    if(!product){
        return res.json({
        success:false,
        error:true,
        data:[],
        message:"Product not Found !"
        })
    }
    
    const updatedData = await productModel.findByIdAndDelete(_id)

    res.json({
        success:true,
        error:false,
        data:updatedData,
        message:"Product deleted Successfully !"
    });
}

module.exports = deleteProduct;