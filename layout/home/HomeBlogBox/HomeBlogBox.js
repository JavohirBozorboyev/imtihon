import React from "react";
import Image from "next/image";
import Blogging from "../../../img/blogging.jpg";


function HomeBlogBox() {
  return (
    <>
      <div className="container relative flex justify-center mt-20">
        <h1 className="text-2xl z-10 md:text-3xl lg:text-4xl px-4 bg-white uppercase border-2 border-green-300 font-bold font-serif text-center -rotate-2 text-green-300">
          Blogs
        </h1>
        <div className="absolute left-0 right-0 h-[4px] bg-green-300 -rotate-2 mt-[16px] md:mt-[20px] "></div>
      </div>
      <div className="container py-8 flex justify-center">
          <p className=" md:w-6/12 text-slate-400 text-center text-xl  -rotate-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eveniet ratione quos beatae non saepe.</p>
      </div>
      <div className="container py-6 pb-16 flex flex-col md:flex-row">
        <div className="w-full md:w-6/12 flex justify-center">
          <div className=" overflow-hidden rounded -rotate-2 shadow-x4 shadow-slate-300">
            <div className=" p-2 flex items-start">
              <p className="bg-slate-200 rounded-full w-10 h-10"></p>
              <div className="flex flex-col w-8/12">
                <p className="w-full h-1 ml-2 mt-2 bg-slate-100"></p>
                <p className="w-8/12 ml-2 mt-2 bg-slate-100 h-1"></p>
              </div>
            </div>
            <div className=" w-[300px] h-[150px] bg-slate-200"></div>
            <div className="p-2">
              <div className="flex flex-col">
                <p className="h-2 w-full bg-slate-100 rounded mt-2"></p>
                <p className="h-2 w-8/12 bg-slate-100 rounded mt-2"></p>
              </div>
              <div className="mt-6">
                <p className="h-1 w-full bg-slate-100 rounded mt-2"></p>
                <p className="h-1 w-8/12 bg-slate-100 rounded mt-2"></p>
                <p className="h-1 w-10/12 bg-slate-100 rounded mt-2"></p>
                <p className="h-1 w-full bg-slate-100 rounded mt-2"></p>
                <p className="h-1 w-6/12 bg-slate-100 rounded mt-2"></p>
                <p className="h-1 w-8/12 bg-slate-100 rounded mt-2"></p>
              </div>
            </div>
            <div className=" p-2 py-4 flex mt-4 border-t-2 items-center justify-between">
              <p className="w-2/12 h-1 bg-slate-200"></p>
              <p className="w-2/12 h-1 bg-slate-200"></p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 p-2 lg:p-4 mt-8 md:mt-0 relative flex justify-end">
          <Image
            src={Blogging}
            alt="blogging"
            width={350}
            height={350}
            className=" rounded-md z-20"
          />
          <div
            style={{
              clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 20% 99%, 0% 50%)",
            }}
            className="absolute rounded-xl -rotate-2 left-0 right-0 bottom-0 top-0 bg-green-200 z-0"
          ></div>
        </div>
      </div>
    </>
  );
}

export default HomeBlogBox;
