const CustomError = require("../../utils/customError");
const cartModel = require("../../model/cart")

const addToCart = async (req, res, next) => {
    const { p_id } = await req.body;
    const u_id = req.currentUser.id;
    // console.log(p_id);

    const productAvailable = await cartModel.findOne({ p_id,u_id});
    if (productAvailable) {
        return res.status(200).json(
            {
                error: false,
                success: true,
                message: "prduct already available",
                data: productAvailable
            }
        )
    }

    if (!p_id) {
        return next(new CustomError(400, "Product ID missing"));
    }

    const cartDetail = {
        p_id,
        u_id
    }

    const response = await cartModel(cartDetail);
    const detail = await response.save();

    res.status(200).json(
        {
            error: false,
            success: true,
            message: "product Added To cart",
            data: detail
        }
    )

}

module.exports = addToCart;