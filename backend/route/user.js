const express = require("express");
const app = express();
const router = express.Router({mergeParams:true})
const loginController = require("../controller/login.js")
const signupController = require("../controller/sign.js")
const userDeatilController = require('../controller/userDetail.js')
const logoutController = require('../controller/logout.js')
const showAllUserController = require('../controller/allUser.js')
const updateUserController = require('../controller/updateUser.js')
const wrapAsync = require("../utils/wrapasyn.js")
const {AuthenticateUser,AuthenticateAdmin} = require('../middleware/autho.js')

router.post("/login",wrapAsync(loginController))
router.get('/user-detail',AuthenticateUser,userDeatilController)
router.post("/signup",wrapAsync(signupController));
router.get("/logout",wrapAsync(logoutController));

// admin

router.get('/all-user',AuthenticateUser,AuthenticateAdmin,wrapAsync(showAllUserController));
router.put('/update',AuthenticateUser,AuthenticateAdmin,wrapAsync(updateUserController))


module.exports = router;