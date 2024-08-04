const productModel = require("../../model/product")

const category = async(req,res) => {

    const {category} = req.params;
    const data = await productModel.find({category:category});

    
    if (!data) {
        return res.json({
            success: false,
            error: true,
            data: [],
            message: "Following category doesn't exits..."
        })
    }

    res.json({
        success: true,
        error: false,
        data: data,
        message: "Category Product"
    })

}

module.exports = category;