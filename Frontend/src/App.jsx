import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetail } from './store/userSlice'
import Context from './context'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
axios.defaults.withCredentials = true


function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState();

  const BackendURL = import.meta.env.VITE_APP_BACKEND_URL
  // console.log(BackendURL);
  

  const fetchCartDetail = async () => {

    try {
      const response = await axios.get(`${BackendURL}/api/cart`);
      setCount(response?.data?.data?.length);
      return response;

    } catch (error) {
      toast.error(error);
    }
  }

  const fetchUserInfo = async () => {
    const userInfo = await axios.get(`${BackendURL}/api/user-detail`);
    if (userInfo.data.success) {
      // console.log(userInfo.data.userData);
      dispatch(setUserDetail(userInfo.data.userData))
    }
  }

  useEffect(() => {
    fetchUserInfo();
    fetchCartDetail();
  }, [])



  return (
    <>
      <Context.Provider value={{ fetchUserInfo, count, fetchCartDetail }}>
        <Navbar />
        <ToastContainer />
        <main className='min-h-[calc(100vh-90px)] relative top-[70px] mx-1 md:mx-4'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App
