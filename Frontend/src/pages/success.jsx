import axios from 'axios';
import React, { useEffect } from 'react'

const Success = () => {

  const deleteCartDetails = async () => {
    const responseCart = await axios.delete("/api/cart");
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
