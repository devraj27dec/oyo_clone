"use Client"
import Image from 'next/image';
import Link from 'next/link';


const Hotel = ({ e }) => {
  return (
    <div className=' border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5'>
      <div className='flex'>
      <Image
        src={e?.banner || '/placeholder-image.jpg'}
        alt="hotel"
        width={2000}
        height={2000}
        priority
        className=' w-96 h-small-box mr-3'
      />
        <div className=' flex flex-col justify-between'>
          {
            e && e.gallery && e.gallery.map((ele , index) => (
              <Image
                key={index}
                src={ele || '/placeholder-image.jpg'}
                alt="hotel"
                width={2000}
                height={2000}
                className=" w-28 h-16 object-cover"
                priority
              />
            ))
          }
        </div>
        <div className=' ml-20'>
          <h2 className=' font-bold text-3xl line-clamp-1'>{e?.name}</h2>
          <p className=' text-justify my-5 text-lg'>{e?.description}</p>
          <div className=' text-2xl my-5'>
            <span  className="font-bold">Facilites:</span>
            <ul className=' flex my-3'>
              {e && e.facilities && e.facilities.map((facility , index) => (
                <li key={index}  className=" mr-10 mb-3 flex items-center">
                  <span>
                    <Image
                      src={facility.img}
                      width={3000}
                      height={3000}
                      className="w-8 h-8 rounded-full object-cover"
                      alt='facility'
                    />
                  </span>
                  <span className="ml-5">{facility.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=' flex items-center'>
            <button className=' w-60 h-14 rounded-lg bg-blue-400 text-lg'>
              Price: {e?.price}
            </button>
            <Link href={`/hotels/${e?._id}`} className="text-xl font-bold text-red-600 ml-10">
              See Details
            </Link>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Hotel;
