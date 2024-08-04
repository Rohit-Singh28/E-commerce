const userModel = require('../model/user')

const showAllUser = async(req,res) => {
    const allUser = await userModel.find({});
    res.status(200).json({
        error:false,
        success:true,
        message:"All user Detail success",
        data:allUser
    });
}

module.exports = showAllUser