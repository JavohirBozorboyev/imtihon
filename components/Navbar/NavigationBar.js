import Link from "next/link";
import React from "react";

function NavigationBar() {


  return (
    <div className=" bg-white  md:hidden   fixed w-full bottom-[0%] z-[1000] shadow-x4 shadow-gray-700 ">
      <div className="container flex justify-around py-3 sm:py-4  md:w-8/12 lg:w-6/12  items-center sm:justify-around px-6">
        <Link href="/">
          <a className="text-white flex flex-col items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#a6a6a6"
            >
              <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
            </svg>
            {/* <p className=" text-xs text-green-300  mt-1 sm:ml-2">Home</p> */}
          </a>
        </Link>
        <Link href="/exem">
          <a className="text-white flex flex-col items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#a6a6a6"
            >
              <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
            </svg>
            {/* <p className=" text-xs text-green-300 mt-1 sm:ml-2">Exam</p> */}
          </a>
        </Link>
        
        <Link href="/blog">
          <a className="text-white flex flex-col items-center sm:flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#a6a6a6"
            >
              <path d="M22.814 9.031h-1.95c-1 0-1.185-.764-1.185-1.707.001-4.045-3.272-7.324-7.308-7.324h-5.062c-4.037 0-7.309 3.279-7.309 7.324v9.352c0 4.045 3.272 7.324 7.309 7.324h9.383c4.036 0 7.308-3.279 7.308-7.324v-6.457c0-.657-.531-1.188-1.186-1.188zm-15.428-3.031h4.229c.765 0 1.385.671 1.385 1.5s-.62 1.5-1.386 1.5h-4.228c-.766 0-1.386-.671-1.386-1.5s.62-1.5 1.386-1.5zm9.134 12h-9.04c-.817 0-1.48-.672-1.48-1.5 0-.83.663-1.5 1.48-1.5h9.039c.817 0 1.48.67 1.48 1.5.001.828-.662 1.5-1.479 1.5z" />
            </svg>
            {/* <p className=" text-xs text-green-400 mt-1 sm:ml-2">Blog</p> */}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
