import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const OrderDetails = () => {
  const BackendURL = import.meta.env.VITE_APP_BACKEND_URL

  const [orderDetails, setOrderDetails] = useState([]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`${BackendURL}/api/orderDetails`);
      if (response.data.error) {
        toast.error(response.data.message);
        return;
      }
      // console.log(response.data.data);
      let dataReceived = new Array();
      dataReceived = response.data.data;
      dataReceived.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      // console.log(dataReceived);
      setOrderDetails(dataReceived);

    } catch (error) {
      toast.error('Error fetching order details');
    }
  }

  useEffect(() => {
    fetchOrderDetails();
  }, [])

  return (
    <div className="container mx-auto px-0 md:px-4 py-8">
      {orderDetails.length === 0 ? (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center py-12">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h1 className="text-2xl font-semibold text-gray-700">No Orders</h1>
            <p className="text-gray-500 mt-2">You haven't placed any orders yet.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">Your Order History</h1>
          <div className="space-y-6">
            {orderDetails.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            Order Date {new Date(order.createdAt).toLocaleDateString()}
          </h2>
          <span className={`px-2 text-xm md:text-[1rem]  leading-5 font-semibold rounded-full ${order.orderStatus === 'deleiverd' ? 'bg-green-100 text-green-800' :
            order.orderStatus === 'on the way' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
            {order.orderStatus}
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
            {order.payment_method_details[0]}
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-4">
          <p className="font-semibold text-lg">
            Total Amount: ₹{order.totalAmount.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            Payment ID: {order.payment_id}
          </p>
        </div>
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Ordered Products</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {order.productInfo.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden h-[400px] w-[300px] space-y-4">
      <div className="flex justify-center h-[75%]">
        <img
          src={product.img[0]}
          alt={product.name}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 truncate">{product.name}</h3>
        <div className="flex justify-between text-sm">
          <p>Quantity: {product.quantity}</p>
          <p>Price: ₹{(product.totalAmt / product.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
