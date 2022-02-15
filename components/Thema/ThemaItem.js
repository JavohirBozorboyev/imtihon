import React from 'react'

function ThemaItem({data}) {
  return (
    <div className=" relative w-full overflow-hidden z-50  sm:w-[48%] md:w-[30%] lg:w-[32%]  rounded p-2 my-2 flex flex-col cursor-pointer shadow-md border-t-4 border-green-300  transition-all hover:bg-green-300">
      <div className=" text-center py-2 ">
        <p className="text-gray-700 text-xl z-10 capitalize">
          {data.name} 
        </p>
      </div>
      <div className="flex justify-end">
        <p className="text-gray-500 text-base ">{data.total} Tests</p>
      </div>

      <div className=" absolute -z-10  left-[0%] p-2 top-[15%] overflow-hidden  bottom-[-20%] w-20 h-[150%]  opacity-[0.5] rotate-[30deg] bg-green-300 rounded-md">
        <hr className=" bg-white mt-2 w-[80%]" />
        <hr className=" bg-white mt-2 " />
        <hr className=" bg-white mt-2 w-[50%]" />
        <hr className=" bg-white mt-2" />
        <hr className=" bg-white mt-2 w-[40%]" />
        <hr className=" bg-white mt-2" />
        <hr className=" bg-white mt-2 w-[60%]" />
        <hr className=" bg-white mt-2" />
        <hr className=" bg-white mt-2 w-[20%]" />
      </div>
    </div>
  );
}

export default ThemaItem