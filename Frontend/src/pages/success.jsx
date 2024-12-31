import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from '../context';

const Success = () => {
  const BackendURL = import.meta.env.VITE_APP_BACKEND_URL
  const navigate = useNavigate();

  const { fetchCartDetail } = useContext(Context);
  const deleteCartDetails = async () => {
    const responseCart = await axios.delete(`${BackendURL}/api/cart`);
    console.log(responseCart.data);
  }

  useEffect(() => {
    deleteCartDetails();
    fetchCartDetail();
  }, []);

  const handleViewOrders = () => {
    navigate('/orderdetails'); // Adjust this route as needed
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-8">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        <button
          onClick={handleViewOrders}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          View My Orders
        </button>
      </div>
    </div>
  )
}

export default Success

