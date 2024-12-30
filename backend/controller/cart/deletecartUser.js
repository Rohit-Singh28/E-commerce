const cartModel = require("../../model/cart")

const deleteCartUser = async (req,res) => {
    const currentUser = req.currentUser;
    const response = await cartModel.deleteMany({u_id : currentUser.id});
    res.status(200).json({
        data: response,
        message: "cart Info deleted !",
        error: false,
        success: true
    })
}

module.exports = deleteCartUser;