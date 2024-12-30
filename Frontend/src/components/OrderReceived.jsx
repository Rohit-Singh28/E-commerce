import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OrderReceived = () => {
    const BackendURL = import.meta.env.VITE_APP_BACKEND_URL

    const [data, setData] = useState([]);
    console.log(data);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BackendURL}/api/allOrders`);
            const dataReceived = response.data.data;
            dataReceived.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setData(dataReceived);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleChange = async (e, orderId) => {
        // console.log(e.target.value);
        // console.log(orderId);
        try {
            const response = await axios.put(`${BackendURL}/api/updateStatus`, { status: e.target.value, orderID: orderId });
            if (response.data.success) {
                fetchData();
            }

        } catch (error) {
            toast.error(error)
        }


    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen mb:8 md:mb:20 lg:mb-36 bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Management</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {data.map((order, index) => (
                            <li key={index} className="px-6 py-4 hover:bg-gray-50">
                                <div className="flex flex-col gap-4 md:flex-row items-center justify-between mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-indigo-600">Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                                        <p className="text-sm text-gray-500">Payment ID: {order.payment_id}</p>
                                    </div>
                                    <span className={`px-2  text-xs  leading-5 font-semibold rounded-full ${order.orderStatus === 'deleiverd' ? 'bg-green-100 text-green-800' :
                                        order.orderStatus === 'on the way' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {order.orderStatus}
                                    </span>
                                    <select name="orderStaus" id="" className='border border-blue-400' onChange={(e) => handleChange(e, order._id)}>
                                        <option value={order.orderStatus}>{order.orderStatus}</option>
                                        <option value="pending">pending</option>
                                        <option value="on the way">on the way</option>
                                        <option value="deleiverd">deleiverd</option>
                                    </select>
                                </div>
                                <div className="mt-4 border-t border-gray-200 pt-4">
                                    <h3 className="text-lg font-medium text-gray-900">Customer Information</h3>
                                    <p className="mt-1 text-sm text-gray-600">Name: {order.userId.name}</p>
                                    <p className="mt-1 text-sm text-gray-600">Email: {order.userId.email}</p>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Order Items</h3>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {order.productInfo.map((product, productIndex) => (
                                            <div key={productIndex} className="border rounded-lg p-4 flex space-x-4 ">
                                                <div className='w-20 h-20 flex justify-center'>
                                                    <img src={product.img[0]} alt={product.name} className="h-full w-full object-contain " />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                                    <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                                                    <p className="text-sm font-medium text-gray-900">Total: &#8377;{product.totalAmt.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderReceived;

