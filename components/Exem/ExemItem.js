import Link from "next/link";
import React from "react";

function ExemItem({ data }) {
  return (
    <Link href="/exem/[name]" as={`/exem/${data.name}`}>
      <a
        className=" relative rounded-md overflow-hidden z-20  w-full border-l-8 border-teal-300 transition-all hover:border-sky-500   sm:w-10/12 md:w-[48%] lg:w-[30%] p-2 my-2 shadow-x4  cursor-pointer"
        
      >
        <div className="py-4">
          <p className="text-teal-300 font-bold text-2xl text-center uppercase  z-20">
            {data.name}
          </p>
        </div>
        <div className="z-20">
          <p className="text-gray-400 text-sm flex justify-end uppercase font-bold z-20">
            {data.total} Tests
          </p>
        </div>

        {/* <div className=" absolute bg-gray-200 w-[150px] opacity-[0.4]  h-[150px] rounded-full -z-10 -rotate-45 bottom-[-30%] left-[-10%]"></div>
        <div className=" absolute bg-green-300 w-[150px] opacity-[0.4]  h-[150px] rounded-full -z-10 -rotate-45 top-[-40%] right-[-20%]"></div> */}
      </a>
    </Link>
  );
}

export default ExemItem;
