const productModel = require("../../model/product");

const updateProduct = async(req,res) => {
    
    const {brandName,category,description,price,productImage,productName,sellingPrice,_id} = req.body;
    const newData = {
        brandName,
        category,
        description,
        price,
        productImage,
        productName,
        sellingPrice
    }
    
    const product = await productModel.findById(_id)
    
    if(!product){
        return res.json({
        success:false,
        error:true,
        data:[],
        message:"Product not Found !"
        })
    }



    const updatedData = await productModel.findByIdAndUpdate(_id,newData)

    res.json({
        success:true,
        error:false,
        data:updatedData,
        message:"Product Updated Successfully !"
    });
}

module.exports = updateProduct;




