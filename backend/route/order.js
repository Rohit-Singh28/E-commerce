const express = require('express');
const wrapAsync = require('../utils/wrapasyn');
const { AuthenticateUser, AuthenticateAdmin } = require('../middleware/autho');
const router = express.Router({mergeParams:true})
const paymentControler = require('../controller/orders/paymentController');
const weHookController = require("../controller/orders/webHook")
const orderDetail = require("../controller/orders/orderDetails")
const allOrderDetailAdminController = require("../controller/orders/AllorderDetaiolsAdmin")
const orderStatusChangeController = require("../controller/orders/updateOrder")



router.post('/payment',AuthenticateUser,wrapAsync(paymentControler))
router.post('/webhook', express.raw({ type: 'application/json' }), weHookController);
router.get('/orderDetails',AuthenticateUser,wrapAsync(orderDetail));
router.get('/allOrders',AuthenticateUser,AuthenticateAdmin,wrapAsync(allOrderDetailAdminController))
router.put('/updateStatus',AuthenticateUser,AuthenticateAdmin,wrapAsync(orderStatusChangeController))

module.exports = router