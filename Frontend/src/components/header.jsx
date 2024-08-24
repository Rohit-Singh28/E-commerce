import React, { useContext, useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUserDetail } from '../store/userSlice'
import Context from '../context';
import { IoSearch } from "react-icons/io5";



function Header() {

  const user = useSelector(state => state?.user?.user)
  const context = useContext(Context);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [search, setSearch] = useState('')

  // console.log(user);

  // search
  const handleSearch = (e) => {
    const value = (e.target.value);
    setSearch(value);
    if(e.target.value){
      navigate(`/search?q=${search}`)
    }else{
      navigate('/search')

    }
  }

  // console.log(search);
  
  //logout
  const LogoutClicked = async () => {
    const response = await axios.get('/api/logout');
    // console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
      dispatch(setUserDetail(null))
      navigate("/")
    }
  }

  return (
    <header className='flex  items-center w-full h-[65px] px-4 shadow-xl border fixed top-0 z-40 bg-slate-200'>

      <div className=' space-x-10'>
        <h1 className='inline '>logo</h1>
        <Link to={'/'} className='mx-4'>Home</Link>
      </div>

      <div className='hidden  mx-auto lg:flex items-center '>
        <div>
          <input
            type="search"
            value={search}
            className='sm:w-[200px] m-4 lg:w-[330px] py-1 px-2 border border-black rounded-lg focus:shadow-lg hover:shadow-lg'
            onChange={handleSearch}
          />
        </div>
        <div className=' cursor-pointer'>
          <IoSearch className='w-5 h-5' />
        </div>
      </div>

      <div className='flex gap-7 items-center absolute right-8'>
        <div className='relative felx justify-center items-center flex-col cursor-pointer'>

          <div onClick={() => setMenuDisplay(!menuDisplay)}>
            <FaRegUser />
          </div>
          {menuDisplay && (user?.role === 'Admin') &&
            <div className='absolute top-8 left-1  bg-blue-300 p-3 cursor-pointer ' onClick={() => setMenuDisplay(!menuDisplay)}>
              <Link to={'/admin'}>Admin</Link>
            </div>}

        </div>
        {user && <div>
          <Link to={"/cart"}>
            <IoCartOutline className='w-5 h-5 inline-block cursor-pointer' />
            <span
              className=' relative -top-2'
            >{context?.count}</span></Link>
        </div>}

        {
          user?._id ? <div onClick={LogoutClicked} className=' cursor-pointer'>logout</div> :
            <div><Link to={"/login"}>login</Link></div>
        }

      </div>

    </header>
  )
}

export default Header
