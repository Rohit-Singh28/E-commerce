import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ShowImagesDetail = ({ images }) => {

    if(images){
        const [index, setIndex] = useState(images[0])

    const handleActiveImage = (image) => {
        setIndex(image);
    }



    return (
        <div className=' md:h-[380px] flex flex-col-reverse md:flex-row gap-5'>
            {/* all images */}
            <div className='flex flex-row md:flex-col gap-4 overflow-x-scroll h-28 md:overflow-y-scroll scrollbar-none md:h-full  '>
                {
                    images?.map((image) => {
                        return (
                            <div className=' h-20 w-20  shadow-md border my-auto md:my-0' key={uuidv4()} onMouseEnter={() => { handleActiveImage(image) }} onClick={() => { handleActiveImage(image) }}>
                                <img src={image} alt="img" className='p-1 w-full h-full object-scale-down mix-blend-multiply cursor-pointer'/>
                            </div>
                            
                        )
                    })
                }
            </div>
            {/* single images */}
            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96  self border shadow-lg border-slate-500 transition-all'>
                <img src={index} alt="img" className='p-4 w-full h-full object-scale-down mix-blend-multiply cursor-pointer' />
            </div>
        </div>
    )
    }
    else{
        return null
    }
}

export default ShowImagesDetail
