import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import hbanner from '../../../img/hbanner.png'


function HomeHeader() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, mintcream, #faffd1)",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 92%)",
        }}
        className="  py-12  flex overflow-hidden justify-center items-center"
      >
        <div className="container relative flex items-center flex-col md:flex-row  ">
          <div className="w-full md:w-6/12">
            <h1 className="text-green-400  text-4xl lg:text-6xl capitalize font-serif">
              Harbir sohada birinchilardan bo'ling...
            </h1>
            <p className=" mt-4 text-base md:text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              delectus, beatae aliquid exercitationem magni maxime repellendus
              reiciendis officia ipsa.
            </p>
            <div className="mt-12">
              <Link href="/exem">
                <a className=" py-2 shadow-x5 shadow-green-300 bg-green-300 px-6 font-bold text-white text-xl rounded-md duration-500 hover:bg-gray-600 hover:shadow-gray-600">
                  Start Now
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12 mt-10 md:mt-0 ">
            <Image src={hbanner} layout="responsive" />
          </div>

          <div>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader