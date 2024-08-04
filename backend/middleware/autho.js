const jwt = require('jsonwebtoken');
const wrapAsync = require('../utils/wrapasyn')
const userModel = require('../model/user')

const AuthenticateUser = wrapAsync(async (req, res, next) => {
    const token = req.cookies?.jwttoken;
    const t = req.cookies;
    if (!token) {
        return res.status(200).json({
            message: "Login in to continue..",
            success: false,
            error: true,
            data:t,
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.currentUser = decoded;
        next();

    }
    catch (error) {
        res.status(400).send('Invalid token !');
    }
})

const AuthenticateAdmin = wrapAsync(async(req,res,next) => {
    const user = await  userModel.findById(req.currentUser.id);
    
    if (user.role != 'Admin') {
        return res.json({
            message: "You are not the admin , you can't access the data.",
            success: false,
            error: true,
            data:[]
        })
    }
    next();
}) 

module.exports = {AuthenticateUser,AuthenticateAdmin}