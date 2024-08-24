import React, { useContext, useLayoutEffect, useState } from 'react'
import signinLogo from '../assets/singinLogo/signin.gif'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from '../context';

const Signup = () => {

  const [show, setShow] = useState(false);
  const [setData, setSetData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const { fetchUserInfo,fetchCartDetail } = useContext(Context)

  const eyeClicked = () => {
    setShow((prev) => {
      return (!prev)
    })
  }

  const handleOnChange = (e) => {     // to set the value of input while changing
    const { name, value } = e.target;
    setSetData((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })

  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', setData);
      if (response.data.result) {
        toast.success(response.data.message);
        navigate('/')
        fetchUserInfo(); 
        fetchCartDetail();
        // setTimeout(() => { navigate('/');window.location.reload(false); }, 1000)
      }
      else {
        toast.error(response.data.message);
      }

    }
    catch (err) {
      toast.error(err.response.data.message)
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <section>
      <div className='mx-auto container m-9 bg-slate-100 w-[300px]  md:w-[400px] flex flex-col items-center justify-center'>

        <div className='p-5'>
          <img src={signinLogo} alt="a" className='w-14- h-14' />
        </div>
        <div className='md:w-full px-4 my-6'>
          <form action="" className='flex flex-col' onSubmit={handleOnSubmit} >
            <label htmlFor="email">Email</label>
            <div>
              <input type="email"
                placeholder='Enter your email...'
                name='email'
                onChange={handleOnChange}
                value={setData.email}
                className=' px-4  border-gray-500 rounded-lg w-full h-8 bg-slate-200 outline-none'
              />
            </div>
            <label htmlFor="password">password</label>
            <div className='flex flex-row w-full justify-center items-center  border-gray-500 rounded-lg  h-8 bg-slate-200'>
              <div className='w-full'>
                <input type={show ? 'text' : 'password'}
                  placeholder='********'
                  name='password'
                  onChange={handleOnChange}
                  value={setData.password}
                  autoComplete='true'
                  className='px-4 border inline-block h-8 bg-slate-200  rounded-lg w-full outline-none'
                />
              </div>
              <div className='mr-4 cursor-pointer'
                onClick={eyeClicked}
              >
                <span>{show ? <FaRegEye /> : <IoEyeOff /> }</span>
              </div>
            </div>
            <Link to={'/forgot-password'}
              className='text-sm text-right hover:underline hover:text-red-600 my-1 duration-150'
            >Forget password ?</Link>

            <button
              className=' self-center bg-red-500 hover:scale-110 hover:bg-red-600 my-4 py-2 w-20 rounded-2xl duration-200 text-white'
            >login</button>

          </form>

          <div className='text-sm text-left my-2'>
            <span>Don't Have account ? </span>
            <Link to={'/signup'}
              className='text-sm text-right hover:underline hover:text-blue-600 my-1 duration-150'
            >Signup</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Signup
