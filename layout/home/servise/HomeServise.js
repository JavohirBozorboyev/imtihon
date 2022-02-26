import React from "react";

function HomeServise() {
  return (
    <div className="container py-8 overflow-hidden flex justify-around flex-wrap  items-center ">
      <div className="w-full sx:w-10/12 mt-4 sm:w-[48%]  flex flex-col justify-center items-center shadow-x4 border-green-300 border-t-4 shadow-green-300 rounded-md p-4 duration-500 ">
        <article className="bg-green-300 p-4 rounded-full shadow-x4 shadow-green-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
          </svg>
        </article>
        <h3 className="text-green-300 text-2xl font-bold  mt-4">Examination</h3>
        <p className="text-base text-center text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
     
      <div className="w-full mt-4 sx:w-10/12 md:w-[48%]  flex flex-col justify-center items-center shadow-x4 shadow-green-300 rounded-md p-4 border-t-4 border-green-300  duration-500 ">
        <article className="bg-green-300 p-4 rounded-full shadow-x4  shadow-green-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z" />
          </svg>
        </article>
        <h3 className="text-green-300 text-2xl font-bold  mt-4">Blogs</h3>
        <p className="text-base text-center text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default HomeServise;
