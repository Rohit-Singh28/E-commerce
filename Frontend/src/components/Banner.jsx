import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import image1 from '../assets/banner/img1.webp'
import image2 from '../assets/banner/img2.webp'
import image3 from '../assets/banner/img3.jpg'
import image4 from '../assets/banner/img4.jpg'
import image5 from '../assets/banner/img5.webp'


const Banner = () => {

    const image =[image1, image2, image3, image4, image5]
    const[index,setIndex] = useState(0);

    const handleRightMove = () => {
        if(index < image.length-1){
            setIndex((prev) => prev+1);
        }
    }

    const handleLeftMove = () => {
        if(index != 0){
            setIndex((prev) => prev-1);
        }
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            if(index < image.length-1){
                setIndex((prev) => prev+1);
            }
        else{
            setIndex(0);
        }
        },3000)
        return ()=> clearInterval(interval)
    },[index])

    return (
        <div className='  my-3 mx-auto py-3 w-full h-[180px] md:h-[240px] '>
            
            <div className='flex place-content-between  relative top-[90px] md:top-[120px] z-20'>
                <button className='text-2xl '>
                    <MdKeyboardArrowLeft onClick={handleLeftMove} />

                </button>
                <button className='text-2xl'>
                    <MdKeyboardArrowRight onClick={handleRightMove}/>
                </button>
            </div>

            <div className='flex h-full w-full  overflow-hidden'>
                {
                    image?.map((url) => {
                        return (
                            <div className=' min-w-full min-h-full mx-auto rounded-lg transition-all' key={uuidv4()} style={{ transform: `translateX(-${index * 100}%)` }}>
                                <img src={url} alt="banner" className='w-full h-full rounded-lg object-fill' />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Banner
