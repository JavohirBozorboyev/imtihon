import Link from "next/link";
import React from "react";

function ExemItem({ data }) {
  return (
    <Link href="/exem/[name]" as={`/exem/${data.id}`}>
      <a className=" relative rounded-md overflow-hidden z-20  w-full border-l-8 border-teal-300 transition-all hover:border-sky-500   sm:w-10/12 md:w-[48%] lg:w-[30%] p-2 my-2 shadow-x4 shadow-teal-300  cursor-pointer">
        <div className="py-4">
          <p className="text-teal-300 font-bold text-xl text-center uppercase  z-20">
            {data.name}
          </p>
        </div>
        <div className="z-20">
          <div className="text-gray-400 text-sm flex justify-end uppercase font-bold z-20">
            {data.total_themes}  <p className="ml-2">Thema</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ExemItem;
