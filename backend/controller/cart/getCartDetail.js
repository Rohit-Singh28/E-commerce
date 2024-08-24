const cartModel = require("../../model/cart");

const cartDetail = async (req,res) => {
    const u_id = req.currentUser.id;
    const data = await cartModel.find({u_id}).populate("p_id");

    res.json({
        success:true,
        error:false,
        data:data,
        message:"Data send"
    });
}

module.exports = cartDetail;