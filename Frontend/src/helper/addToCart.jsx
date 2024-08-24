import axios from 'axios';
import React from 'react'

const addToCart = async(id) => {

    // console.log(id);
    try {
      const response = await axios.post("/api/cart",{p_id:id})
      // console.log(response);
      return response;
      

    } catch (error) {
      return error;
    }
}



export default addToCart 
