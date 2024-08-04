import React from 'react'

const ShowDetailLoader = () => {
  return (
    <div className='flex flex-col gap-5 md:gap-6'>
    <div className='space-y-5 '>
      <p className=' w-[100px] py-3 bg-slate-200 rounded-xl'></p>
      <p className=' text-2xl md:text-3xl w-[400px] py-4 bg-slate-200'></p>
      <p className=' w-[400px] py-3 bg-slate-200'></p>
    </div>

    <div className='flex text-red-400 text-xl'>

    </div>

    <div>
      <p className='font-bold text-red-500 text-2xl mx-2 inline '></p>
      <p className='text-slate-600 text-2xl mx-2 inline  line-through'></p>
    </div>

    <div className='flex items-center gap-3 my-2'>
      <button className='border-2 border-slate-200 rounded px-3 py-3 min-w-[120px]   bg-slate-200 ' ></button>
      <button className='border-2 border-slate-200 rounded px-3 py-3 min-w-[120px]   bg-slate-200 ' ></button>
    </div>
    <div>
      <p className='font-semibold w-[400px] py-3 bg-slate-200'> </p>
    </div>

  </div>
  )
}

export default ShowDetailLoader
