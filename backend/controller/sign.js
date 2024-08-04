const userModel = require('../model/user');
const bcrypt = require('bcrypt');
const customError = require("../utils/customError")



const signupController = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!email) {
        throw new customError("Enter email");
    }
    if (!name) {
        throw new customError("Enter name");
    }
    if (!password) {
        throw new customError("Enter password");
    }


    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
        throw new customError("some error occurs");
    }

    const userData = {
        name,
        email,
        password:hashPassword,
        role:"General",
    }

    const user = await userModel(userData);
    const saveUser = await user.save();


    res.status(200).json({
        data: saveUser,
        message: "user created successfully",
        error: false,
        success: true
    })
}


module.exports = signupController