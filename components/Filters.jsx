'use Client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Filters = ({price , setPrice ,handlePrice , setCheckList}) => {

  const [list , setList] = useState([])

  const fetchFacilities = async() => {
    try {
      const {data} = await axios.get(`http://localhost:3000/api/facilities`)
      if(data?.facilities){
        setList(data.facilities)
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleCheckList = async(e) => {
    let newList = [];
    if(e.target.checked){
      newList.push(e.target.value)
      setCheckList(newList)
    }
    console.log(newList);
    newList = newList.filter((i) => i !== e.target.value)
    setCheckList(newList)
  }

  useEffect(() => {
    fetchFacilities();
  },[])

  return (
    <>
      <div className=' border-nore rounded-md h-auto m-3 mt-5'>
        <label htmlFor="price">
          Price: {" "}
        </label>    
        <input
         type="range"
         id='price'
         min={100}
         max={1500}
         onChange={(e) => setPrice(e.target.value)}
         defaultValue={price ? price: 0}
        />
        <span>&#8377; {price ? price : ""}</span>
        <div>
          <button className=' w-20 h-10 bg-green-300 cursor-pointer my-3' onClick={handlePrice}>Search</button>
        </div>
        <div className=' my-5'>
          <h3 className=" text-xl font-bold ">Filtered by Facilities : </h3>
          {list?.map((facility) => (
            <p key={facility} className="grid grid-cols-4 my-3">
              <label htmlFor="checkbox" className=' col-span-2'>
               {facility}{" "} 
              </label>
              <input
               type="checkbox"
               name='checkbox'
               id='checkbox'
               value={facility}
               className=" w-5 h-5 ml-3 col-span-2"
               onChange={handleCheckList}
              />
            </p>
          ))}
        </div>
      </div>     
        
    </>
 );
}
export default Filters;
