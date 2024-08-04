import React, { useState } from 'react'
import signinLogo from '../assets/singinLogo/signin.gif'
import { FaRegEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  console.log("d");

  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const navigate = useNavigate();

  const [setData, setSetData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  })

  const eyeClicked = () => {
    setShow((prev) => {
      return (!prev)
    })
  }

  const eyeClickedC = () => {
    setShowC((prev) => {
      return (!prev)
    })
  }



  const handleOnChange = (e) => {     // to set the value o finput while changing
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
    if (setData.confirmPassword === setData.password) {

      const response = await axios.post("/api/signup", setData);
      console.log(response);
      if (response.statusText == 'OK') {
        setSetData({
          email: "",
          password: "",
          name: "",
          confirmPassword: ""
        })
        toast.success("User created successfully");
        navigate('/login')
      }


    }
    else {
      toast.error("password doesn't match", {
        position: "top-center",
        autoClose: false
      })
    }
  }


  return (
    <section>
      <div className='mx-auto container m-9 bg-slate-50  w-[300px]  md:w-[400px] flex flex-col items-center justify-center'>
        <div className='p-5'>
          <img src={signinLogo} alt="a" className='w-14- h-14' />
        </div>
        <div className='w-full px-4 my-6'>
          <form action="" className='flex flex-col gap-2' onSubmit={handleOnSubmit} >
            <label htmlFor="name">name</label>
            <div>
              <input type="text"
                placeholder='Enter your name...'
                name='name'
                onChange={handleOnChange}
                value={setData.name}
                className=' px-4  border-gray-500 rounded-lg w-full h-8 bg-slate-200 outline-none'
              />
            </div>
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
                <span>{show ? <FaRegEye /> : <IoEyeOff />}</span>
              </div>
            </div>


            <label htmlFor="confirmPassword">confirm Password</label>
            <div className='flex flex-row w-full justify-center items-center  border-gray-500 rounded-lg  h-8 bg-slate-200'>
              <div className='w-full'>
                <input type={showC ? 'text' : 'password'}
                  placeholder='********'
                  name='confirmPassword'
                  onChange={handleOnChange}
                  value={setData.confirmPassword}
                  autoComplete='true'
                  className='px-4 border inline-block h-8 bg-slate-200  rounded-lg w-full outline-none'
                />
              </div>
              <div className='mr-4 cursor-pointer'
                onClick={eyeClickedC}
              >
                <span>{showC ? <IoEyeOff /> : <FaRegEye />}</span>
              </div>
            </div>


            <button
              className=' self-center bg-red-500 hover:scale-110 hover:bg-red-600 my-4 py-2 w-20 rounded-2xl duration-200 text-white'
            >login</button>

          </form>

          <div className='text-sm text-left my-2'>
            <span>Already Have account ? </span>
            <Link to={'/login'}
              className='text-sm text-right hover:underline hover:text-blue-600 my-1 duration-150'
            >Login</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Signup
