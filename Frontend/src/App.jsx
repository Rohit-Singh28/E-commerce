import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetail } from './store/userSlice'
import Context from './context'
import './App.css'
import { ToastContainer } from 'react-toastify'


function App() {
  const dispatch = useDispatch();
  
  const fetchUserInfo = async () => {
    const userInfo = await axios.get('/api/user-detail');
    if (userInfo.data.success) {
      console.log(userInfo.data.userData);
      dispatch(setUserDetail(userInfo.data.userData))
    }
    
  }
  
  useEffect(() => {
      fetchUserInfo();
    }, [])
    


  return (
    <>
      <Context.Provider value={{fetchUserInfo}}>
        <Header />
        <ToastContainer/>
        <main className='min-h-[calc(100vh-90px)] relative top-[70px] mx-4'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App
