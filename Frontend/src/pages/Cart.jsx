import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Context from '../context';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { fetchCartDetail } = useContext(Context)

  const fetch = async () => {

    const response = await fetchCartDetail();
    console.log(response);

    setData(response?.data?.data)

  }
  // console.log(data);

  const handleDecreaseQuantity = async (e, ele) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(ele);
    if (ele.quantity > 1) {
      try {
        const response = await axios.post(`/api/cart/${ele._id}`, { quantity: (ele.quantity - 1) })
        // console.log(response);
        if (response?.data?.success) {
          fetch();
        }
      } catch (error) {
        toast.error(error)
      }
    }
  }

  const handleIncreaseQuantity = async (e, ele) => {
    e.preventDefault();
    e.stopPropagation()
    // console.log(ele);
    try {
      const response = await axios.post(`/api/cart/${ele._id}`, { quantity: (ele.quantity + 1) })
      // console.log(response);
      if (response?.data?.success) {
        fetch();
      }
    } catch (error) {
      toast.error(error)
    }
  }
  
  const handleRemove = async (e, ele) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await axios.delete(`/api/cart/${ele._id}`)
      // console.log(response);
      if (response?.data?.success) {
        fetch();
      }
    } catch (error) {
      toast.error(error)
    }
  }


  const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
  const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.p_id?.sellingPrice), 0)
  // console.log(totalQty,totalPrice);


  useEffect(() => {
    fetch();
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='mx-1 md:mx-8 my-4 flex flex-col md:flex-row gap-8'>
      <div className='flex my-4 gap-4 flex-col scrollbar-none w-full md:w-[55%] ' >

        {
          data?.map((ele) => {
            return (
              <Link to={`/product/${ele.p_id._id}`} key={uuidv4()} className='w-full  md:w-full  bg-white rounded-sm shadow'>
                <div className='flex gap-4 border  h-[160px] md:h-[160px] rounded-lg hover:shadow-lg  duration-400'  >
                  <div className='bg-slate-200 w-[130px] md:w-[180px]'>
                    <img src={ele.p_id.productImage[0]} alt="img" className='w-full h-full  mix-blend-multiply object-scale-down ' />
                  </div>
                  <div className='bg-white  w-full mx-0 md:mx-4 capitalize space-y-3 my-2'>
                    <p className='font-semibold line-clamp-1'>{ele.p_id.productName}</p>
                    <p className='text-slate-600 pb-2 mx-2'>{ele.p_id.category}</p>
                    <p className='font-bold text-red-600 text-lg mx-2 inline '>&#8377; {ele.p_id.sellingPrice.toLocaleString('en-In')}</p>
                    <p className='text-slate-600 text-lg mx-2 inline  line-through'>&#8377; {ele.p_id.price.toLocaleString('en-In')}</p>
                    <div className='flex gap-3 my-2'>
                      <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={(e) => { handleDecreaseQuantity(e, ele) }} >-</button>
                      <span>{ele?.quantity}</span>
                      <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={(e) => { handleIncreaseQuantity(e, ele) }} >+</button>
                      <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-1 flex justify-center items-center rounded ml-auto' onClick={(e) => { handleRemove(e, ele) }} >Remove</button>

                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }

      </div>
      <div className=' my-4 w-full flex flex-col md:flex-1 shadow-md h-[200px] place-content-between'>
        <p className='bg-red-500 text-white p-2 text-xl text-center'>Summary</p>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
            <p>Quantity</p>
            <p>{totalQty}</p>
          </div>
          <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
            <p>Total Price</p>
            <p>&#8377; {totalPrice.toLocaleString('en-In')}</p>
          </div>
        </div>
        <button className='relative bottom-0 w-full p-2 text-xl border px-3  bg-green-500 text-white hover:bg-green-600 duration-300'>Payment</button>
      </div>
    </div>
  )
}

export default Cart
