import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecommendedCart from '../components/RecommendedCart';

const Category = () => {

  const { category } = useParams();
  const [filter, setFilter] = useState({});
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minPrice, setMinPrice] = useState(0);


  const handleMaxPriceChange = (e) => {
    setFilter((prev) => {
      return { ...prev, maxPrice: e.target.value }
    })
    setMaxPrice(e.target.value);
  }

  const handleMinPriceChange = (e) => {
    setFilter((prev) => {
      return { ...prev, minPrice: e.target.value }
    })
    setMinPrice(e.target.value);
  }

  console.log(filter);
  

  return (
    <div className='flex gap-8 '>
      <div className='hidden  my-10 mb-8 w-[20%] border h-screen p-3 md:flex flex-col gap-4'>
        <h1 className='text-center text-2xl p-3 border-b-2'>Filters</h1>
        <h2 className='text-lg text-slate-600'>{category}</h2>
        <div>
          <input type="range" name="proce" id="price" min={0} max={20000}  value={maxPrice}
            className='w-full' onChange={handleMaxPriceChange} step={100}/>
          <div className='flex gap-4'>
            <div className='w-[50%] space-x-2'>
              <label htmlFor="min" className='text-sm'>Min</label>
              <select name="min" id="min" className=' border' defaultValue={0} onChange={handleMinPriceChange} >
                <option value="0">0</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="20000">20000</option>
              </select>
            </div>
            <div className='w-[50%] space-x-2'>
              <label htmlFor="max" className='text-sm'>Max</label>
              <select name="max" id="max" className=' border'  value={maxPrice} onChange={handleMaxPriceChange}>
                <option >Max</option>
                <option value={maxPrice}>{maxPrice}</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="20000">20000</option>
                <option value="20000">20000+</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className='flex-1'>
        <RecommendedCart category={category} title={category} />
      </div>
    </div>
  )
}

export default Category
