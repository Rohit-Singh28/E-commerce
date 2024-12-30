const Order = require("../../model/order");

const orderDetails = async (request, response) => {
    const currentUser = request.currentUser;
    console.log(currentUser);
    
    if (!currentUser) {
        return response.status(401).json(
            {
                success: false,
                error: true,
                message: "Something went wrong",
                data: []
            }
        )
            ;

    }

    const OrderDetails = await Order.find({ userId: currentUser.id }).populate("userId");

    response.json({
        success: true,
        error: false,
        message: "Data Found",
        data: OrderDetails
    });
}

module.exports = orderDetails;