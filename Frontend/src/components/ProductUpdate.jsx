import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from '../helper/category';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import addImageToCloudinary from '../helper/uploadImage';
import { MdDelete } from "react-icons/md";
import FullImage from './FullImage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductUpdate = ({ data, onclose , fetchData }) => {

    const [newData, setNewData] = useState({
        ...data
    })
    const [openFullScreen, setOpenFullScreenImage] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {

        setNewData((prev) => {
            const { name, value } = e.target
            return ({
                ...prev,
                [name]: value

            })
        })
    }

    const handleProductImage = async (e) => {
        const image = e.target.files[0];

        const imageUrl = await addImageToCloudinary(image);

        setNewData((prev) => {
            return ({
                ...prev,
                productImage: [...prev.productImage, imageUrl]
            })
        })
    }

    const handleDelete = async (imageUrl) => {
        const newProductImage = (newData.productImage.filter((url) => url !== imageUrl));

        setNewData((prev) => {
            return ({
                ...prev,
                productImage: newProductImage
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('/api/product',newData);
            if(response.data.success){
                toast.success(response.data.message)
                onclose();
                await fetchData();
                newData({});
                navigate('/admin')
            }
        }
        catch (err) {
            toast.error(err.response.data.message)
        }
    }

    console.log(newData);


    return (
        <div className='fixed w-full  h-full bg-slate-200 bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden shadow-xl'>
                <button className=' block ml-auto mb-5' onClick={() => { onclose() }} ><MdClose /></button>
                <h1 className='text-center font-bold p-2'>New Product Info</h1>

                <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit} >
                    <label htmlFor='productName'>Product Name :</label>
                    <input
                        type='text'
                        id='productName'
                        placeholder='enter product name'
                        value={newData.productName}
                        onChange={handleChange}
                        name='productName'
                        className='p-2 bg-slate-100 border rounded'
                        required
                    />


                    <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
                    <input
                        type='text'
                        id='brandName'
                        placeholder='enter brand name'
                        name='brandName'
                        value={newData.brandName}
                        onChange={handleChange}
                        className='p-2 bg-slate-100 border rounded'
                        required
                    />

                    <label htmlFor='category' className='mt-3'>Category :</label>
                    <select required value={newData.category} name='category' onChange={handleChange} className='p-2 bg-slate-100 border rounded'>
                        <option value={""}>Select Category</option>
                        {
                            productCategory.map((el, index) => {
                                return (
                                    <option value={el.value} key={el.value + index}>{el.label}</option>
                                )
                            })
                        }
                    </select>

                    <label htmlFor='productImage' className='mt-3'>Product Image :</label>
                    <label htmlFor='uploadImageInput'>
                        <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                                <span className='text-4xl'><FaCloudUploadAlt /></span>
                                <p className='text-sm'>Upload Product Image</p>
                                <input type='file' id='uploadImageInput' name='productImage' className='hidden' onChange={handleProductImage} />
                            </div>
                        </div>
                    </label>
                    <div>

                        {
                            newData?.productImage ? (
                                <div className='flex items-center gap-2'>
                                    {
                                        newData.productImage.map((el, index) => {
                                            return (
                                                <div className='relative group' key={uuidv4()}>
                                                    <img
                                                        src={el}
                                                        alt={el}
                                                        width={80}
                                                        height={80}
                                                        className='bg-slate-100 border cursor-pointer'
                                                        onClick={() => {
                                                            setOpenFullScreenImage(true)
                                                            setFullScreenImage(el)
                                                        }}
                                                    />

                                                    <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer'
                                                        onClick={() => { handleDelete(el) }}
                                                    >
                                                        <MdDelete />
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <p className='text-red-600 text-xs'>*Please upload product image</p>
                            )
                        }

                    </div>

                    <label htmlFor='price' className='mt-3'>Price :</label>
                    <input
                        type='number'
                        id='price'
                        placeholder='enter price'
                        name='price'
                        className='p-2 bg-slate-100 border rounded'
                        value={newData.price}
                        onChange={handleChange}
                        required
                    />


                    <label htmlFor='sellingPrice' className='mt-3'>Selling Price :</label>
                    <input
                        type='number'
                        id='sellingPrice'
                        placeholder='enter selling price'
                        name='sellingPrice'
                        value={newData.sellingPrice}
                        onChange={handleChange}
                        className='p-2 bg-slate-100 border rounded'
                        required
                    />

                    <label htmlFor='description' className='mt-3'>Description :</label>
                    <textarea
                        className='h-28 bg-slate-100 border resize-none p-1'
                        placeholder='enter product description'
                        rows={3}
                        name='description'
                        value={newData.description}
                        onChange={handleChange}
                    >
                    </textarea>


                    <button type='submit' className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Upload Product</button>
                </form>
            </div>



            {(openFullScreen && <FullImage imgUrl={fullScreenImage} close={() => setOpenFullScreenImage(false)} />)}
        </div>
    )
}

export default ProductUpdate
