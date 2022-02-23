import React from 'react'

function H1() {
  return (
    <div className="overflow-hidden bg-[mintcream]">
      <div className="container flex  flex-col md:flex-row items-center py-16">
        <div className="w-full flex justify-center md:w-6/12 px-4">
          <article className="w-full  h-[350px] rounded rotate-3 bg-green-300"></article>
        </div>
        <div className=" mt-12 w-full md:w-6/12 flex flex-wrap justify-around">
          <article className="shadow-x4 border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className="w-10 h-10 bg-black rounded"></div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">Free Examination</h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
          <article className="shadow-x4 border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className="w-10 h-10 bg-black rounded"></div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">Payment Examination</h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
          <article className="shadow-x4 border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className="w-10 h-10 bg-black rounded"></div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">Premium Examination</h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default H1