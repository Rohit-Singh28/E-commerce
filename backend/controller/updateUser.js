const userModel = require('../model/user')

const updateUser = async(req,res) => {
    const{name,email,password,role,_id} = req.body;
    const user = {
        email,
        name,
        password,
        role
    }
    const updatedUser = await userModel.findByIdAndUpdate(_id,user);
    res.status(200).json({
        success: true,
        error: false,
        data: user,
        a:updatedUser,
        message: 'User Updated successfully..'
    })
}

module.exports = updateUser;