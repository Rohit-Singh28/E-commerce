import axios from 'axios';
import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminProductCart = ({ data, updateForm, setUpdateProductData,fetchData }) => {

  const navigate = useNavigate(); 

  const handleUpdate = () => {
    setUpdateProductData(data)
    updateForm();
  }

  const handleDelete = async(id) => {
   
    try{
      const response = await axios.delete('/api/product',{
        data: {
          _id: id
        }
      });
  
      if(response.data.success){
        toast.success("Product deleted !")
        fetchData();
        navigate('/admin')
      }
    }
    catch(err){
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className='bg-white h-[340px] w-[80%] mx-auto md:mx-0 md:h-[400px]  md:w-full flex flex-col  gap-3 shadow-lg p-2 place-content-between rounded-xl'>
      <div className='h-[60%] mt-2'>
        <img src={data.productImage[0]} alt="" className='mx-auto object-fill h-full' />
      </div>
      <div className='pl-2 ml-4'>
        <p className='font-semibold m-2 line-clamp-1 md:line-clamp-2'>{data.productName}</p>
        <p className='font-bold text-lg mx-2 inline mr-4'>&#8377; {data.sellingPrice.toLocaleString('en-In')}</p>
        <p className='font-bold text-lg mx-2 inline ml-4 line-through'>&#8377; {data.price.toLocaleString('en-In')}</p>
      </div>
      <span className=' block ml-auto pb-3 pr-4 text-xl '>
        <button className='p-2 mr-2 hover:text-2xl duration-300' onClick={() => {handleDelete(data._id)}}><RiDeleteBin6Line /></button>
        <button className='p-2 ml-2 hover:text-2xl duration-300' onClick={handleUpdate}><MdModeEdit /></button>
      </span>
    </div>
  )
}

export default AdminProductCart
