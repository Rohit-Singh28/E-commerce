const productModel = require("../../model/product");

const distinctProduct = async (req, res) => {
    const productCategory = await productModel.distinct('category');

    const productByCategory = [];

    for(const category of productCategory){
        const product = await productModel.findOne({category })

        if(product){
            productByCategory.push(product)
        }
    }

    res.json({
        message : "category product",
        data : productByCategory,
        success : true,
        error : false
    })
}

module.exports = distinctProduct;