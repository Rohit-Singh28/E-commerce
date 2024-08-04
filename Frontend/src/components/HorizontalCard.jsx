import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { Link,useNavigate } from 'react-router-dom';

const HorizontalCard = ({ category, title }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const demoProduct = new Array(8).fill(null);
    const scrollElement = useRef()
    const navigate = useNavigate();

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



    console.log(product);

    return (
        <div className='my-8 mb-8'>
            <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
            <div className='hidden md:flex place-content-between  relative top-[90px] md:top-[110px] '>
                <button className='text-2xl bg-white p-1 rounded-[50%]  z-20' onClick={handleLeftMove}>
                    <MdKeyboardArrowLeft />

                </button>   
                <button className='text-2xl bg-white p-1 rounded-[50%] transition-all z-20' onClick={handleRightMove}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className='flex my-4 gap-4 overflow-x-scroll scrollbar-none ' ref={scrollElement}>

                {
                    loading ? (demoProduct?.map((ele) => {
                        return (
                            <div className='flex border shadow-md h-[160px] md:h-[160px] rounded-md animate-pulse' key={uuidv4()}>
                                <div className='bg-slate-200 w-[130px] md:w-[180px]'>
                                </div>
                                <div className='bg-white w-[180px]  md:w-[200px] h-full ml-4 capitalize space-y-3 my-2'>
                                    <p className=' bg-slate-200 h-4 mx-2 '></p>
                                    <p className='bg-slate-200  h-4 mx-2 my-2 '></p>
                                    <p className='bg-slate-200  h-4 mx-2 '></p>
                                    <p className='bg-slate-200 mx-2 inline  h-4'></p>
                                    <button className='border my-3 px-10 py-4 bg-slate-200 rounded-2xl '></button>
                                </div>
                            </div>
                        )
                    })) : (
                        product?.map((ele) => {
                            return (
                                <Link to={`/product/${ele._id}`} key={uuidv4()} className='w-full min-w-[310px]  md:min-w-[380px] max-w-[310px] md:max-w-[380px]  bg-white rounded-sm shadow'>
                                    <div className='flex gap-4 border  h-[160px] md:h-[160px] rounded-lg hover:shadow-lg hover:scale-x-[1.03] duration-400'  >
                                        <div className='bg-slate-200 w-[130px] md:w-[180px]'>
                                            <img src={ele.productImage[0]} alt="img" className='w-full h-full  mix-blend-multiply object-scale-down ' />
                                        </div>
                                        <div className='bg-white w-[180px]  md:w-[200px] mx-4 capitalize space-y-3 my-2'>
                                            <p className='font-semibold line-clamp-1'>{ele.productName}</p>
                                            <p className='text-slate-600 pb-2 mx-2'>{ele.category}</p>
                                            <p className='font-bold text-red-600 text-lg mx-2 inline '>&#8377; {ele.sellingPrice.toLocaleString('en-In')}</p>
                                            <p className='text-slate-600 text-lg mx-2 inline  line-through'>&#8377; {ele.price.toLocaleString('en-In')}</p>
                                            <button className='w-full border px-3  bg-red-500 rounded-2xl text-white hover:bg-red-600 duration-300'>Add to cart</button>
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

export default HorizontalCard
