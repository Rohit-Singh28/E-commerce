import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUserDetail } from '../store/userSlice'


function Header() {

  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuDisplay, setMenuDisplay] = useState(false)

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
   
      <div className=''>
        <h1 className='inline '>logo</h1>
        <Link to={'/'} className='mx-4'>Home</Link>
      </div>

      <Search />

      <div className='flex gap-7 items-center absolute right-8'>

        <div className='relative felx justify-center items-center flex-col cursor-pointer'>

          <div onClick={() => setMenuDisplay(!menuDisplay)}>
            <FaRegUser />
          </div>

          {menuDisplay && (user?.role === 'Admin') && 
            <div className='absolute top-8 left-1  bg-blue-300 p-3 cursor-pointer '  onClick={() => setMenuDisplay(!menuDisplay)}>
              <Link to={'/admin'}>Admin</Link>
            </div>}

        </div>

        <div>
          <IoCartOutline className='w-5 h-5 inline-block' />
          <span
            className=' relative -top-2'
          >{1}</span>
        </div>

        {
          user?._id ? <div onClick={LogoutClicked} className=' cursor-pointer'>logout</div> :
            <div><Link to={"/login"}>login</Link></div>
        }

      </div>

    </header>
  )
}

export default Header
