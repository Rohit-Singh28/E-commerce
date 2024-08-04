import React from 'react'
import CategoryOpt from '../components/CategoryOpt'
import Banner from '../components/Banner'
import HorizontalCard from '../components/HorizontalCard'
import VerticalCard from '../components/VerticalCard'

const Home = () => {


  return (
    <>
      <div className='mx-6 my-2'>
      <CategoryOpt/>
      <Banner/>
      <HorizontalCard category={'airpodes'} title={'Top Airpodes'}/>
      <HorizontalCard category={'earphones'} title={'Best Earphone'}/>

      <VerticalCard category={'trimmers'} title={'Latest Mobiles'}/>
      <VerticalCard category={'mobiles'} title={'Latest Mobiles'}/>
      <VerticalCard category={'televisions'} title={'Latest Mobiles'}/>
      <VerticalCard category={'refrigerator'} title={'Latest Mobiles'}/>


      <HorizontalCard category={'watches'} title={'Best Earphone'}/>

      
      <VerticalCard category={'Mouse'} title={'Best Earphone'}/>
      <VerticalCard category={'speakers'} title={'Latest Mobiles'}/>
      <VerticalCard category={'printers'} title={'Latest Mobiles'}/>


      </div>
    </>
  )
}

export default Home