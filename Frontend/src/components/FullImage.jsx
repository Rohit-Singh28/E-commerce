import React from 'react'
import { MdClose } from "react-icons/md";

const FullImage = ({imgUrl,close}) => {
   
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 w-full  bg-opacity-50 bg-slate-500 flex justify-center items-center'>
        <div className='bg-white w-[50%] '>
        <button className=' block ml-auto m-5' onClick={()=>{close()}} ><MdClose /></button>
            <img src={imgUrl} alt="img" className='w-[100%]'/>
        </div>
    </div>
  )
}

export default FullImage
