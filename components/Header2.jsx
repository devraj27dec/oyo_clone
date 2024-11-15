import Link from 'next/link';
import React from 'react';

const Header2 = () => {

  const List = [
      {
        name: "Banglore",
      },
      {
        name: "Chennai",
      },
      {
        name: "Mumbai",
      },
      {
        name:"Guragon"
      },
      {
        name: "Noida",
      },
      {
          name:"kolkata"
      },
      {
          name:"pune"
      },
      {
        name: "Hyderabad",
      },
  ];
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {
          List.map((e)=>{
              return(
                <Link href={`/hotels?city=${e.name}`}>
                  <span key={e.name} >{e.name}</span>
                </Link>
              )
          })
        }
      </div>
    </div>
  );
}

export default Header2;
