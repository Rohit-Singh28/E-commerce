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
import Category from '../pages/Category.jsx';
import Success from '../pages/success.jsx';
import Cancel from '../pages/Cancel.jsx';
import OrderDetails from '../pages/OrderDetails.jsx';
import OrderReceived from '../components/OrderReceived.jsx';

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
                    },
                    {
                        path:'order-receicved',
                        element:<OrderReceived/>
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
            },
            {
                path:'/:category',
                element:<Category/>
            },
            {
                path:'/payment',
              
                children:[
                    {
                        path:"success",
                        element:<Success/>
                    },
                    {
                        path:"cancel",
                        element:<Cancel/>
                    }
                ]
            },
            {
                path:'/orderdetails',
                element:<OrderDetails/>
            }


        ]
    }
])

export default router;