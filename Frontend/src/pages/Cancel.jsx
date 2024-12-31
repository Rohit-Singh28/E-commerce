import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  const handleReturnToCart = () => {
    navigate('/cart'); // Adjust this route as needed
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-8">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Cancelled</h2>
        <p className="text-gray-600 mb-8">
          Your payment was not processed. If you encountered any issues, please try again or contact our support team.
        </p>
        <button
          onClick={handleReturnToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Cart
        </button>
      </div>
    </div>
  )
}

export default Cancel

