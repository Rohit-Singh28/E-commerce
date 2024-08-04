import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const ShowImageDetailLoader = () => {

    const images = new Array(4).fill(null);

  return (
    <div className=' md:h-[350px] flex flex-col-reverse md:flex-row gap-5'>
    {/* all images */}
    <div className='flex flex-row md:flex-col gap-4 overflow-x-scroll h-28 md:overflow-y-scroll scrollbar-none md:h-full  border'>
        {
            images?.map((image) => {
                return (
                    <div className='bg-slate-200 animate-pulse  h-20 w-20  shadow-md border my-auto md:my-0' key={uuidv4()}  >
                    </div>
                    
                )
            })
        }
    </div>
    {/* single images */}
    <div className='bg-slate-200 animate-pulse h-[300px] w-[300px] lg:h-96 lg:w-96  self border shadow-lg border-slate-500 transition-all'>
    </div>
</div>
  )
}

export default ShowImageDetailLoader
