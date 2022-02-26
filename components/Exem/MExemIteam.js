import Link from 'next/link';
import React from 'react'

function MExemIteam({data}) {
  return (
    <Link href="/exem/[name]" as={`/exem/${data.name}`}>
      <a className=" relative rounded-md overflow-hidden z-20  w-full border-l-8 border-yellow-300 transition-all hover:border-gray-500   sm:w-10/12 md:w-[48%] lg:w-[30%] p-2 my-2 shadow-x4 shadow-yellow-300  cursor-pointer">
        <div className="py-4">
          <p className="text-yellow-300 font-bold text-2xl text-center uppercase  z-20">
            {data.name}
          </p>
        </div>
        <div className="z-20">
          <p className="text-gray-400 text-sm flex justify-end uppercase font-bold z-20">
            {data.total} Tests
          </p>
        </div>
      </a>
    </Link>
  );
}

export default MExemIteam