const usermodel = require("../model/user.js");
const CustomError = require("../utils/customError");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { version } = require("mongoose");

const loign = async (req, res) => {

    const { email, password } = req.body;
    
    if (!email || !password) {
        throw new CustomError(400, "email or password is missing")
    }
    
    const userDeatil = await usermodel.find({ email: email });
    
    if(userDeatil.length == 0){
        throw new CustomError(400, "User not found!")
    }
    
    const user = userDeatil[0];
    const result = await bcrypt.compare(password, user.password);//true or false

    if (result != true) {
        res.json({
            success: true,
            error: false,
            result: result,
            message: "Incorrect password"
        })
    }

    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 8 })

    res.cookie("jwttoken", token).json({
        token: token,
        success: true,
        error: false,
        result: result,
        message: 'login successful'
    });


}

module.exports = loign;