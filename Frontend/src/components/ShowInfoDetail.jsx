import React, { useContext } from 'react'
import { IoStar } from "react-icons/io5";
import addToCart from '../helper/addToCart';
import { toast } from 'react-toastify';
import Context from '../context';


const ShowInfoDetail = ({ productDetail }) => {

  const {fetchCartDetail} = useContext  (Context)

  const handleAddToCart = async (e,id) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(id);
    const response =  await addToCart(id);
    if(response.data.success == true){
        toast.success(response?.data?.message);
        fetchCartDetail();
    }
    else{
        toast.error(response?.data?.message);
    }
    
}
  // console.log(productDetail);
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <div className='space-y-2'>
        <p className='bg-red-300 inline px-4 py-1 rounded-xl'>{productDetail?.brandName}</p>
        <p className=' text-2xl md:text-3xl font-semibold capitalize'>{productDetail?.productName}</p>
        <p className=' capitalize text-slate-500 font-semibold'>{productDetail?.category}</p>
      </div>

      <div className='flex text-red-400 text-xl'>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>

      <div>
        <p className='font-bold text-red-500 text-2xl mx-2 inline '>&#8377; {productDetail?.sellingPrice?.toLocaleString('en-In')}</p>
        <p className='text-slate-600 text-2xl mx-2 inline  line-through'>&#8377; {productDetail?.price?.toLocaleString('en-In')}</p>
      </div>

      <div className='flex items-center gap-3 my-2'>
        <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e) => handleBuyProduct(e, productDetail?._id)}>Buy</button>
        <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' onClick={(e) => handleAddToCart(e, productDetail?._id)}>Add To Cart</button>
      </div>
      <div>
        <p className='font-semibold'>Description : </p>
        <p className=' text-slate-700 '>{productDetail?.description}</p>
      </div>

    </div>

  )
}

export default ShowInfoDetail
