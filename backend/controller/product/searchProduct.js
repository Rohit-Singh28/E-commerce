const productModel = require("../../model/product");
const CustomError = require("../../utils/customError");

const searchProduct = async(req,res,next) => {
    const search = req.query.q;

    const regex = new RegExp(search,'i','g');

    const product = await productModel.find({
        "$or" :[
            {
                productName : regex
            },
            {
                category : regex
            }
        ]
    })

    if(!product){
        next (new CustomError(500,"Serach not found.."))
    }

    res.json({
        error:false,
        success:true,
        message:"Data found",
        data:product,
    })
}

module.exports = searchProduct;