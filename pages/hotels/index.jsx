'use Client'
import Filters from '@/components/Filters';
import Header1 from '@/components/Header1';
import Hotel from '@/components/Hotel';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Hotels = ({hotels}) => {

  const [price , setPrice] = useState(1500);
  const [list ,setList] = useState([])
  const [checkList , setCheckList] = useState([])

  const handleCheckList = async() => {
    try {
      const {data} = await axios.get(`http://localhost:3000/api/facilities/search?val=${checkList}`)
      if(data?.hotels){
        setList(data.hotels)
      }
    } catch (error) {
      console.error('Error fetching filtered hotels:', error);
      setList([]); // Reset to empty list on error
    }
  }

  useEffect(() => {
    if(checkList){
      handleCheckList()
    }
  },[checkList])

  const handlePrice = async() => {
    try {
      const {data} = await axios.get(`http://localhost:3000/api/facilities/range?price=${price}`)      
      if(data?.hotels){
        setList(data.hotels)
      }
    } catch (error) {
      console.error('Error fetching hotels by price range:', error);
      setList([]); // Reset to empty list on error
    }
  }

  return (
    <>
     <Header1/>
      <div className=' grid grid-cols-12'>
        <div className=' col-span-2'>
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        </div>
        <div className="m-3 col-span-10">
          {list.length > 0
            ? list.map((ele) => (
                <div className="m-5" key={ele._id}>
                  <Hotel ele={ele} />
                </div>
              ))
            : hotels
            ? hotels.map((e) => (
                <div className="m-5" key={e._id}>
                  <Hotel e={e} />
                </div>
              ))
            : ''}
        </div>
      </div>

    </>
  )
}
export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`)

  const data = await res.json();

  // console.log(data);
  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels
    }
  }

}
export default Hotels;
