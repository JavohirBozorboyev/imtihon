import React from "react";
import ExemList from "../../components/Exem/ExemList";

import Head from "next/head";
import ExamHeader from "../../layout/exem/ExamHeader";

const data = [
  {
    id: 1,
    name: "Matematika",
    color: "#e0f0ea",
    total: 120,
  },
  {
    id: 2,
    name: "Fizika",
    color: "#f0fff0",
    total: 2000,
  },
  {
    id: 3,
    name: "Ingiliz-tili",
    color: "#95adbe",
    total: 600,
  },
  {
    id: 4,
    name: "Kimyo",
    color: "#ffffef",
    total: 500,
  },
  {
    id: 5,
    name: "Informatika",
    color: "#e0f0ea",
    total: 900,
  },
  {
    id: 6,
    name: "Geografiya",
    color: "#f1e8e6",
    total: 1900,
  },
];

function index() {

  return (
    <div>
      <Head>
        <title>Imtihon || Exem</title>
        <meta name="description" content="Imtihon.uz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <ExamHeader />
        </div>
        <div className=" ">
          <div className="container overflow-hidden relative flex justify-center   py-6">
            <div className="absolute -z-10 left-0 top-0 mt-[42px] w-full h-1 bg-teal-300"></div>
            <h1 className="text-2xl font-bold z-20 font-serif text-teal-300 lg:text-3xl text-center bg-white px-4 ">Free Examination</h1>

          </div>
          <ExemList data={data} />
        </div>
      </main>
    </div>
  );
}

export default index;
