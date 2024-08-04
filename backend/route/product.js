const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapasyn.js');
const newProductController = require('../controller/product/newProduct')
const {AuthenticateUser,AuthenticateAdmin} = require('../middleware/autho.js')
const productValidation = require('../middleware/productValidation.js')
const allProductController = require("../controller/product/allPrdouct.js")
const deleteProductController = require("../controller/product/deleteProduct.js")
const distinctProductController = require('../controller/product/distinctProduct.js')
const categoryController = require("../controller/product/category.js")
const productDetailController = require("../controller/product/productDetail.js")
const updateProductController = require("../controller/product/updateProduct.js")




router.post('/product',AuthenticateUser,AuthenticateAdmin,productValidation,wrapAsync (newProductController))
router.get('/product',AuthenticateUser,AuthenticateAdmin,wrapAsync(allProductController))
router.put('/product',AuthenticateUser,AuthenticateAdmin,productValidation,wrapAsync(updateProductController))
router.delete('/product',AuthenticateUser,AuthenticateAdmin,deleteProductController)

router.get('/product/distinct',wrapAsync(distinctProductController))
router.get('/product/category/:category',wrapAsync(categoryController))
router.get('/product/:productId',wrapAsync(productDetailController))


module.exports = router;