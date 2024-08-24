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
const searchProductController = require("../controller/product/searchProduct.js")

const addToCartcontroller = require("../controller/cart/addToCart.js")
const cartDetailConttroller = require("../controller/cart/getCartDetail.js")
const updateCartController = require("../controller/cart/UpdateCart.js")
const deleteCartController = require("../controller/cart/deleteCart.js");
 


router.post('/product',AuthenticateUser,AuthenticateAdmin,productValidation,wrapAsync (newProductController))
router.get('/product',AuthenticateUser,AuthenticateAdmin,wrapAsync(allProductController))
router.put('/product',AuthenticateUser,AuthenticateAdmin,productValidation,wrapAsync(updateProductController))
router.delete('/product',AuthenticateUser,AuthenticateAdmin,deleteProductController)

router.get('/product/distinct',wrapAsync(distinctProductController))
router.get('/product/category/:category',wrapAsync(categoryController))
router.get('/product/:productId',wrapAsync(productDetailController))

router.get('/search',searchProductController)

// Cart related route
router.post('/cart',AuthenticateUser,wrapAsync(addToCartcontroller))
router.get('/cart',AuthenticateUser,wrapAsync(cartDetailConttroller))
router.post('/cart/:id',AuthenticateUser,wrapAsync(updateCartController))  
router.delete("/cart/:id",AuthenticateUser,deleteCartController)


module.exports = router;