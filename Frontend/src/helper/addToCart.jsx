import axios from 'axios';
import React from 'react'

const addToCart = async (id) => {
  const BackendURL = import.meta.env.VITE_APP_BACKEND_URL

  // console.log(id);
  try {
    const response = await axios.post(`${BackendURL}/api/cart`, { p_id: id })
    // console.log(response);
    return response;


  } catch (error) {
    return error;
  }
}



export default addToCart 
