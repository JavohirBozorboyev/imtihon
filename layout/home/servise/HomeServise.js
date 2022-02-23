import React from 'react'

function HomeServise() {
  return (
    <div className="container py-8 overflow-hidden flex justify-around flex-wrap  items-center ">
      <div className="w-full sx:w-10/12 mt-4 sm:w-[48%] lg:w-[32%] flex flex-col justify-center items-center shadow-x4 border-double border-green-300 border-4 shadow-green-300 rounded-md p-4 duration-500 hover:bg-gray-600">
        <article className="bg-green-300 p-4 rounded-full shadow-x5 shadow-green-300">
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
      <div className="w-full sx:w-10/12 mt-4  sm:w-[48%] lg:w-[32%] flex flex-col justify-center items-center shadow-x4 shadow-green-300 rounded-md p-4 border-double border-green-300 border-4  duration-500 hover:bg-gray-600">
        <article className="bg-green-300 p-4 rounded-full shadow-x5 shadow-green-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z" />
          </svg>
        </article>
        <h3 className="text-green-300 text-2xl font-bold  mt-4">Groups</h3>
        <p className="text-base text-center text-gray-400 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-full mt-4 sx:w-10/12 sm:w-full lg:w-[32%] flex flex-col justify-center items-center shadow-x4 shadow-green-300 rounded-md p-4 border-double border-green-300 border-4  duration-500 hover:bg-gray-600">
        <article className="bg-green-300 p-4 rounded-full shadow-x5  shadow-green-300">
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

export default HomeServise