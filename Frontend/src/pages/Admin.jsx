import { useDispatch, useSelector } from 'react-redux'
import signinLogo from '../assets/singinLogo/signin.gif'
import { Link, Outlet, useNavigate } from 'react-router-dom';


const Admin = () => {
    const userInfo = useSelector(state => state?.user?.user);

    return (
        <div className='m-1  h-[calc(100vh-10px)] flex gap-3 mb-10'>
            <aside className=' bg-slate-100 hidden w-[20%] md:flex items-center flex-col p-4 gap-y-4'>
                <div className='p-6'>
                    <img src={signinLogo} alt="a" className='w-full h-16' />
                </div>
                <div className='w-full h-[1px] bg-slate-500'>
                </div>

                <div className='font-semibold space-y-2'>
                    <p>Name : {(userInfo?.name?.toUpperCase())}</p>
                    <p>Email : {(userInfo?.email)}</p>
                    <p>Role : {(userInfo?.role)}</p>
                </div>
                <div className='w-full h-[2px] bg-slate-500'>
                </div>
                <div className='font-semibold flex flex-col gap-y-10 mt-4 cursor-pointer'>
                    <Link to={''}><div>Products</div></Link>
                    <Link to={'all-user'}><div>All user</div></Link>

                </div>
            </aside>

            <div className=' bg-slate-100 flex-1 overflow-y-scroll'>
                <Outlet />
            </div>


        </div>
    )
}

export default Admin