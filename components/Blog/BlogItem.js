import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function BlogItem({ item }) {
  const [Bookmaker, setBookmaker] = useState(true);
  const [Heart, setHeart] = useState(true);
  const BookmakerClick = () => setBookmaker(!Bookmaker);
  const HeartClick = () => setHeart(!Heart);
  return (
    <>
      <div className="mt-3 w-full   md:w-[48%] lg:w-[32%] overflow-hidden shadow-md rounded-md border-t-2  bg-white">
        <div className="flex items-center justify-between px-4">
          <div className="flex justify-between relative items-center py-4">
            <img
              className="w-12 rounded-full"
              src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
              alt="Alex"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
                Javohir Bozorboyev
              </h1>
              <p className="text-sm text-gray-800 hover:underline cursor-pointer">
                Matematika O'qtuvchisi
              </p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
        </div>
        <div className=" relative  h-52 bg-sky-300">
          {/* <img
            layout="fill"
            src="https://sourse.unsplash.com/random"
            alt=""
           

          /> */}
        </div>
        <div className="p-4 cursor-pointer">
          <Link href="/blog/[id]" as={`/blog/${item.id}`}>
            <a className="text-xl font-bold text-gray-700 transition-all capitalize text-justify hover:text-sky-300 cursor-pointer ">
              {item.title.slice(0, 40)}
            </a>
          </Link>
          <h2 className="text-base text-sky-600 py-2">
            #Matematika #Fizika #Geografiya
          </h2>
          <p className="text-sm  overflow-hidden text-gray-600 text-justify">
            {item.body.slice(0, 100)}
          </p>
        </div>
        <div className="px-4 py-2 cursor-pointer flex justify-between border-t-2">
          <div className="flex">
            <div onClick={HeartClick}>
              {Heart ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#242424"
                >
                  <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#242424"
                >
                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                </svg>
              )}
            </div>
            <div className="ml-4" onClick={BookmakerClick}>
              {Bookmaker ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#242424"
                >
                  <path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-.553.576-1.004 1.251-1.316 2h-3.5v17.582l4-3.512 4 3.512v-8.763c.805.19 1.379.203 2 .156zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#242424"
                >
                  <path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm-.5-10.975c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z" />
                </svg>
              )}
            </div>
          </div>
          <div>
            <Link href="/blog/[id]" as={`/blog/${item.id}`}>
              <a className=" text-sky-400 "> Read More </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
