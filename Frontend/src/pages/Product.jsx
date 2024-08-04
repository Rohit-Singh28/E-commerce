import React, { useEffect, useState } from 'react'
import AddProduct from '../components/AddProduct';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AdminProductCart from '../components/AdminProductCart';
import ProductUpdate from '../components/ProductUpdate';


const Product = () => {

  const [uploadForm, setUploadForm] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [shoowUpdateForm, setShowUpdateForm] = useState(false);
  const [updatePrdouctData,setUpdateProductData] = useState({});


  const fetchAllPrdouctData = async () => {
    try {
      const response = await axios.get('/api/product');
      if (response.data.success) {
        setAllProduct(response.data.data);
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch (err) {
      toast.error(err.response.data.message)
    }
  }




  useEffect(() => {
    fetchAllPrdouctData();
  }, [])

  return (
    <div>
      <button className='block ml-auto border my-2 p-2 border-black bg-blue-400 hover:bg-blue-900 hover:text-white duration-500' onClick={() => { setUploadForm(true) }}>Add Product</button>
      <h1 className='text-xl md:text-2xl px-3 font-semibold mx-4 pb-4'>All Products</h1>

      <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  gap-3 mx-2 '>
        {
          allProduct.map((ele) => {
            return (
              <AdminProductCart data={ele} key={uuidv4()} updateForm = {() => {setShowUpdateForm(true)}}  setUpdateProductData = {setUpdateProductData} fetchData={fetchAllPrdouctData}/>
            )
          })
        }
      </div>

      <div>

        {
          uploadForm && <AddProduct setUploadForm={setUploadForm} onclose={() => { setUploadForm(false) }} fetchData={fetchAllPrdouctData} />
        }
      </div>


      {/* UpdateForm */}
      <div>
        {
          shoowUpdateForm && <ProductUpdate data={updatePrdouctData} onclose={() => { setShowUpdateForm(false) }} fetchData={fetchAllPrdouctData}/>
        }
      </div>

    </div>
  )
}

export default Product
