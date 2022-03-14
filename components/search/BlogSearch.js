import React from "react";

function BlogSearch() {
  return (
    <div className="container p-0 mt-4">
      <div className="flex  flex-col px-3 sm:px-0  ">
        <div className="flex bg-gray-100 p-3 w-full space-x-2 rounded-md">
          <input
            className="bg-gray-100 outline-none w-full"
            type="search"
            placeholder="Search Blog . . ."
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* <div className=" flex flex-row items-center mt-4 py-2 overflow-x-scroll rounded-md px-1 cursor-pointer ">
          <p className="text-sm  text-sky-300  py-1 px-2   rounded ">#All</p>
          <p className="text-sm  text-gray-400  py-1 px-2   rounded">
            #Matematika
          </p>
          <p className="text-sm  text-gray-400  py-1 px-2   rounded">
            #Geometirya
          </p>
          <p className="text-sm  text-gray-400  py-1 px-2   rounded">
            #Informatika
          </p>
          <p className="text-sm  text-gray-400  py-1 px-2   rounded">
            #Geografiya
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default BlogSearch;
