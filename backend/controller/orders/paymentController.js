const stripe = require('../../config/stripe')
const UserModel = require("../../model/user")

const paymentControler = async (req, res) => {
    const currentUser = req.currentUser;
    const user = await UserModel.findById(currentUser.id);
    const { data } = req.body;



    const params = {
        submit_type: 'pay',
        mode: "payment",
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            {
                shipping_rate: 'shr_1QbFvZGE9xT1l4LhM342ncpS',
            }
        ],
        customer_email: user.email,
        metadata:{
            user_id: user.id
        },
        line_items: data.map((item) => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.p_id.productName,
                        images: item.p_id.productImage,
                        metadata: {
                            p_id: item.p_id._id,
                        }
                    },
                    unit_amount: item.p_id.sellingPrice * 100,
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                },
                quantity: item.quantity,
            }
        }),
        success_url: `${process.env.FRONTEND_URL}/payment/success`,
        cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
    }

    // console.log(params.line_items[0].price_data);
    // console.log(params);



    const session = await stripe.checkout.sessions.create(params)
    res.json(session);

}

module.exports = paymentControler