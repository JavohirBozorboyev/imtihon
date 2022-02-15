import Link from "next/link";
import React from "react";

function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  const [profil, setProfil] = React.useState(false);
  const toggle = () => {
    setIsActive(!isActive);
    if (profil == true) {
      setProfil(false);
    }
  };
  const toggleProfil = () => {
    setProfil(!profil);
    if (isActive == true) {
      setIsActive(false);
    }
  };

  return (
    <div className="bg-gray-800 relative sm:bg-transparent  flex flex-col justify-center items-center z-[200]  ">
      <div className="container relative h-[56px] sm:rounded-md sm:bg-gray-800 flex justify-between items-center">
        <div className="flex justify-between items-center w-[63%] sm:w-[58%] md:w-[55%] xl:w-[54%]">
          <button className="   relative" onClick={toggle}>
            {isActive ? (
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#fff"
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
                fill="#fff"
              >
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#1040e2"
                />
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
              </svg>
            )}
          </button>
          <Link href="/">
            <a className="text-white uppercase text-xl font-bold ">Imtihon</a>
          </Link>
        </div>

        <div
          className={
            isActive
              ? "absolute md:container  md:mx-auto md:rounded-md z-[100] flex flex-col items-center justify-center py-8 opacity-[1]  bg-gray-600 duration-500 top-[0%] left-0    mt-[56px] w-full  overflow-hidden"
              : "  hidden opacity-[0]      "
          }
        >
          <Link href="/">
            <a className="text-white py-2  " onClick={toggle}>
              About
            </a>
          </Link>
          <Link href="/">
            <a className="text-white py-2 " onClick={toggle}>
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="text-white py-2 " onClick={toggle}>
              Team
            </a>
          </Link>
          <div className=" mt-6">
            <Link href="/">
              <a className="text-white px-6 font-bold mx-2 border border-sky-400 bg-sky-400 transition-all hover:bg-transparent rounded-md py-2">
                Sign In
              </a>
            </Link>
            <Link href="/">
              <a className="text-white px-6 font-bold mx-2 border border-sky-400 transition-all hover:bg-sky-400 rounded-md py-2 ">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
        <div className="realative">
          <div
            className="w-[40px] cursor-pointer h-[40px] rounded-full bg-sky-400"
            onClick={toggleProfil}
          ></div>
        </div>
      </div>
      <div className={profil ? "container relative  " : "hidden"}>
        <div className="absolute z-[100] mt-3 right-0 px-8 py-2 mr-2 flex flex-col rounded shadow-xl shadow-gray-400  bg-gray-600  ">
          <Link href="#">
            <a className="text-white text-md my-1">Your Profil</a>
          </Link>
          <Link href="#">
            <a className="text-white text-md my-1"> Settings</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
