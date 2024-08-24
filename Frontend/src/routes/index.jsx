import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/login.jsx'
import Signup from '../pages/Signup.jsx';
import Home from '../pages/Home.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import Admin from '../pages/Admin.jsx';
import UpdateUser from '../components/UpdateUser.jsx';
import AllUser from '../components/allUser.jsx';
import AddProduct from '../components/AddProduct.jsx';
import Product from '../pages/Product.jsx';
import ShowProduct from '../pages/ShowProduct.jsx';
import Cart from '../pages/Cart.jsx';
import Search from '../pages/Search.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<Signup/>
            },
            {
                path:'forgot-password',
                element:<ForgotPassword/>
            },
            {
                path:'admin',
                element:<Admin/>,
                children:[
                    {
                        path:'',
                        element:<Product/>
                    },
                    {
                        path:'all-user',
                        element:<AllUser/>
                    }
                ]
            },
            {
                path:'/product/:id',
                element:<ShowProduct/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:"/search",
                element:<Search/>
            }


        ]
    }
])

export default router;