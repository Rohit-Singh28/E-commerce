const Order = require("../../model/order");

const updateOrder = async (req, res) => {
    const {status,orderID} = req.body;
    const order = await Order.findByIdAndUpdate(orderID,{orderStatus:status});
    if(!order){
        return res.status(404).json({message: "Order not found"});
    }
    res.status(200).json({
        success: true,
        error: false,
        message: "Status cahnged",
        data: order
    })
}

module.exports = updateOrder