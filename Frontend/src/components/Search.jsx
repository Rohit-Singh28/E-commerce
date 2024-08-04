import React from 'react'
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className='hidden  mx-auto lg:flex items-center '>
    <div>
      <input
        type="search"
        className='sm:w-[200px] m-4 lg:w-[330px] py-1 border border-black rounded-lg focus:shadow-lg hover:shadow-lg'
      />
    </div>
    <div className=' cursor-pointer'>
      <IoSearch className='w-5 h-5' />
    </div>
  </div>
  )
}

export default Search
