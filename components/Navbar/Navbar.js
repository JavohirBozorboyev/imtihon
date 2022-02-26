import Link from "next/link";
import React from "react";

const PageLink = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Exam",
    url: "/exem",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
];

function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-white shadow-x4 shadow-green-300 relative   flex flex-col justify-center items-center z-[200]  ">
      <div className="container  h-[56px] flex justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-[33%] ">
          <Link href="/">
            <a className="text-green-400 font-serif mr-4 uppercase text-xl font-extrabold  ">
              Imtihon
            </a>
          </Link>
          <button className=" md:hidden   relative" onClick={toggle}>
            {isActive ? (
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#242424"
              >
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#242424"
              >
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#1040e2"
                />
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center md:w-[33%]">
          {PageLink.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <a className="text-gray-400 ml-4 font-bold transition-all duration-400 hover:text-green-300 ">
                  {link.name}
                </a>
              </Link>
            );
          })}
          {/* md:relative md:mt-0 md:bg-transparent md:w-[33%] flex items-center flex-col md:flex-row justify-end */}
        </div>

        <div
          className={
            isActive
              ? "  bg-gray-700 absolute left-0 right-0 top-0 mt-[56px] py-6 flex items-center justify-center"
              : "hidden md:flex md:w-[33%] justify-end"
          }
        >
          <div className="mt-8 md:mt-0">
            <Link href="/login">
              <a className=" ml-4 font-bold transition-all duration-400 bg-green-300 border-2 border-green-300 text-white px-4 py-1 rounded ">
                Login In
              </a>
            </Link>
            <Link href="/signup">
              <a className="ml-4 font-bold transition-all duration-400 border-2 border-green-300 text-green-300 px-4 py-1 rounded">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
