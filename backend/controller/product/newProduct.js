const productModel = require('../../model/product')

const newProduct = async (req, res) => {

    const product = await productModel(req.body);
    const data = await product.save();

    if (!data) {
        return res.json({
            success: false,
            error: true,
            data: [],
            message: "Something went wrong , try again !"
        })
    }

    res.json({
        success: true,
        error: false,
        data:data,
        message: "Product added successfully !"
    })

}

module.exports = newProduct;