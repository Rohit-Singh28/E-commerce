import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import ShowImagesDetail from '../components/ShowImagesDetail';
import ShowInfoDetail from '../components/ShowInfoDetail';
import ShowImageDetailLoader from '../components/Loader/ShowImageDetailLoader';
import ShowDetailLoader from '../components/Loader/ShowDetailLoader';
import RecommendedCart from '../components/RecommendedCart';
import VerticalCard from '../components/VerticalCard'




const ShowProduct = () => {

  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/product/${id}`);
      setLoading(false);
      if (response?.data?.success) {
        setProductDetail(response?.data?.data);
      } else {
        toast.error(response.data.message)
      }
    }
    catch (err) {
      toast.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  return (
    <div className='constainer flex flex-col gap-8'>
      {
        loading ? (
          <div className=' my-4 mx-4 flex flex-col md:flex-row gap-8'>
            <div className='w-[300px] md:w-[500px] mx-auto'>
              <ShowImageDetailLoader />
            </div>
            <div className='flex-1'>
              <ShowDetailLoader />
            </div>
          </div>
        ) : (
          <div className=' my-4 mx-4 flex flex-col md:flex-row gap-8'>
            <div className='w-[300px] md:w-[500px] mx-auto'>
              <ShowImagesDetail images={productDetail?.productImage} />
            </div>
            <div className='flex-1'>
              <ShowInfoDetail productDetail={productDetail} />
            </div>
          </div>
        )
      }
      <div>
        {productDetail.category && <RecommendedCart category = {productDetail?.category} title = {"Recommended Product"} />}
      </div>
      <div>
        Review
      </div>
    </div>
  )
}

export default ShowProduct
