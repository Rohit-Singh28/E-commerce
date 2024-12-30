import axios from 'axios';
import React, { useEffect } from 'react'

const Success = () => {
  const BackendURL = import.meta.env.VITE_APP_BACKEND_URL

  const deleteCartDetails = async () => {
    const responseCart = await axios.delete(`${BackendURL}/api/cart`);
    console.log(responseCart.data);
  }

  useEffect(() => {
    deleteCartDetails();
  })

  return (
    <div className=''>
      sucess
    </div>
  )
}

export default Success
