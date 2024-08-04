import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

const VerticalCard = ({ category, title }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const demoProduct = new Array(8).fill(null);
    const scrollElement = useRef()

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios(`/api/product/category/${category}`);
            setLoading(false)
            if (response.data.success) {
                setProduct(response.data.data);
            }
        }
        catch (err) {
            toast.error(err);
        }
    }

    const handleLeftMove = () => {
        scrollElement.current.scrollLeft -= 300

    }

    const handleRightMove = () => {
        scrollElement.current.scrollLeft += 300
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='my-8 mb-8'>
            <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
            <div className='hidden md:flex place-content-between  relative top-[90px] md:top-[110px] z-20'>
                <button className='text-2xl bg-white p-1 rounded-[50%]' onClick={handleLeftMove}>
                    <MdKeyboardArrowLeft />

                </button>
                <button className='text-2xl bg-white p-1 rounded-[50%] transition-all' onClick={handleRightMove}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className='flex my-4 gap-4 overflow-x-scroll scrollbar-none ' ref={scrollElement}>

                {
                    loading ? (demoProduct?.map((ele) => {
                        return (
                            <div className='flex flex-col gap-4 border shadow-md h-[390px] min-w-[300px] md:h-[420px] md:min-w-[350px] rounded-md animate-pulse' key={uuidv4()}>
                                <div className='bg-slate-200  h-[60%] md:h-[60%] w-full  '>
                                </div>
                                <div className='bg-white  mx-4 capitalize space-y-3 my-2'>
                                    <p className='bg-slate-200  h-4 mx-2'></p>
                                    <p className='bg-slate-200  h-4 mx-2'></p>
                                    <p className='bg-slate-200   h-4 mx-2'></p>
                                    <p className='bg-slate-600 text-lg mx-2 line-through'></p>
                                    <button className='bg-slate-200 border rounded-lg w-full px-6 py-3'></button>
                                </div>
                            </div>
                        )
                    })) : (
                        product?.map((ele) => {
                            return (
                                <Link to={`/product/${ele._id}`} key={uuidv4()}>
                                    <div className='flex flex-col gap-4 border h-[390px] min-w-[300px] md:h-[420px] w-[350px] md:min-w-[350px] rounded-md hover:shadow-xl hover:scale-y-[1.03] duration-500' >
                                        <div className='bg-slate-200  md:h-[60%] h-[60%] w-full  '>
                                            <img src={ele.productImage[0]} alt="img" className='h-full  mix-blend-multiply object-scale-down mx-auto py-2 ' />
                                        </div>
                                        <div className='bg-white  mx-4 capitalize space-y-3 my-2'>
                                            <p className='font-semibold line-clamp-1'>{ele.productName}</p>
                                            <p className='text-slate-600'>{ele.category}</p>
                                            <p className='font-bold text-red-600 text-lg mx-2 inline '>&#8377; {ele.sellingPrice.toLocaleString('en-In')}</p>
                                            <p className='text-slate-600 text-lg mx-2 inline  line-through'>&#8377; {ele.price.toLocaleString('en-In')}</p>
                                            <button className='border w-full px-3  bg-red-500 rounded-2xl text-white hover:bg-red-600 duration-300'>Add to cart</button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    )
                }

            </div>
        </div>
    )
}

export default VerticalCard

