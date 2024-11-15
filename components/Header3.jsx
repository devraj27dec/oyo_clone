import Link from 'next/link';
import React, { useState } from 'react';

const Header3 = () => {
  const[city , setCity] = useState("")

  return (
    <div className=" bg-cover bg-center bg-[url('/hero.jpeg')] h-60 items-center ">
      <div className=' mx-28 '>
        <h2 className=" text-4xl text-white text-center font-bold py-5">
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className=' grid grid-cols-5 my-5 mb-3'>
          <input type="text"
            placeholder='Search by city,hotel,neighbour..'
            className=' h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2'
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            type="date"
            
            placeholder="Search..."
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg col-span-1"

          />
          <Link href={`/hotels?city=${city}`}>
            <button type='submit' className='h-16 px-3 py-2 w-72 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white text-xl'>Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header3;
