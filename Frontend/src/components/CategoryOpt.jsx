import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const CategoryOpt = () => {

    const [categoryProduct, setCategoryProduct] = useState([]);
    const[loader,setLoader] = useState(false);
    const loaderData = new Array(10).fill(null);

    const fetchData = async () => {
        setLoader(true);
        const response = await axios.get('/api/product/distinct');
        setLoader(false);
        if (response.data.success) {
            setCategoryProduct(response.data.data)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // console.log(categoryProduct);

    return (
        <div className='w-full]'>
            <div className='  flex items-center gap-4 justify-between overflow-x-scroll scrollbar-none px-4 '>
            {
                loader ? (
                    loaderData.map((product) => {
                        return (
                            <div className='flex flex-col' key={uuidv4()}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center animate-pulse'>
                                </div>
                                <p className=' w-full h-[6px] bg-slate-100 my-2'></p>
                            </div>
                        )
                    })
                ):(
                    categoryProduct.map((product) => {
                        return (
                            <div className='flex flex-col' key={uuidv4()}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product.productImage[0]} alt="img" className='h-full mix-blend-multiply object-scale-down  hover:scale-125 transition-all ' />
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </div>
                        )
                    })
                )
            }
        </div>
        </div>
    )
}

export default CategoryOpt
