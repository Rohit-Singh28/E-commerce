const userModel = require('../model/user.js')

const userDetail = async (req,res) => {
    const userId =  req.currentUser.id;
    const userInfo = await userModel.findById(userId);
    res.status(200).json({
        success:true,
        error:false,
        userData:userInfo,
        message:"User details"
    })
    
}

module.exports = userDetail;