const Order = require("../../model/order");

const allOrderDetailsAdmin = async (request, response) => {
    
    const OrderDetails = await Order.find().populate("userId");

    response.json({
        success: true,
        error: false,
        message: "Data Found",
        data: OrderDetails
    });
}

module.exports = allOrderDetailsAdmin;