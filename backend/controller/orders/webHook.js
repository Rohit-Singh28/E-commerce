const stripe = require("../../config/stripe");
const Order = require("../../model/order");
const endpointSecret = 'whsec_361971a698675372ddd1ed9eb53bb3ebd2dc2c8345241f8fa65acf8b0e8768ef';

const getLineItem = async (lineItem) => {
  let products = new Array();

  if (lineItem?.data?.length > 0) {
    for (const item of lineItem.data) {
      const product = await stripe.products.retrieve(item.price.product);
      const productDetails = {
        product_id: product.metadata.p_id,
        name: product.name,
        quantity: item.quantity,
        totalAmt: item.amount_total / 100,
        img: product.images,
      };

      products.push(productDetails);
    }
  }

  return products;
};


const webHook = async (request, response) => {



  let event;
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const payLoadString = JSON.stringify(request.body)
    const signature = request.headers['stripe-signature'];
    const header = stripe.webhooks.generateTestHeaderString({
      payload: payLoadString,
      secret: endpointSecret
    })
    try {
      event = await stripe.webhooks.constructEvent(
        payLoadString,
        header,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // console.log(session);

      const line_items = await stripe.checkout.sessions.listLineItems(session.id);
      // console.log("Data found");
      const productDetails = await getLineItem(line_items);
      // console.log(productDetails);

      const orderDetails = {
        productInfo: productDetails,
        userId: session.metadata.user_id,
        totalAmount: session.amount_total / 100,
        payment_method_details: session.payment_method_types,
        payment_method_type: session.payment_method,
        payment_id: session.payment_intent,
        status: session.status
      }

      const res = await Order(orderDetails);
      const saveOrder = await res.save();

      // console.log(saveOrder);


      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    // case 'charge.updated':
    //   const charge = event.data.object;
    //   console.log(charge);
      
    //   // Then define and call a method to handle the successful payment intent.
    //   // handlePaymentIntentSucceeded(paymentIntent);
    //   break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.status(200).send();

}

module.exports = webHook