import React from "react";
import ExemList from "../../components/Exem/ExemList";
import Head from "next/head";
import ExamHeader from "../../layout/exem/ExamHeader";
import MExemList from "../../components/Exem/MExemList";
import ExamP1 from "../../img/ExamP1.png";
import Image from "next/image";
import Footer from '../../components/Footer/Footer'

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
        <div
          style={{
            background: "linear-gradient(to right, mintcream, #f0fdfa)",
            clipPath: "polygon(0 0, 100% 0%, 100% 92%, 50% 100%, 0 92%)",
          }}
        >
          <ExamHeader />
        </div>
        <div className=" ">
          <div className="container overflow-hidden relative flex justify-center   py-6">
            <div className="absolute -z-10 left-0 top-0 mt-[42px] w-full h-1 bg-teal-300"></div>
            <h1 className="text-2xl font-bold z-20 font-serif text-teal-300 lg:text-3xl text-center bg-white px-4 ">
              Free Examination
            </h1>
          </div>
          <ExemList data={data} />
        </div>

        <div className="relative">
          <div className="container flex flex-col items-center md:flex-row py-8">
            <div className="w-full z-20  md:w-6/12 flex justify-center">
              <Image src={ExamP1} width={400} height={400} />
            </div>
            <div className="w-full z-20 md:w-6/12 mt-8 md:mt-0">
              <h1 className="text-green-300 text-2xl text-center lg:text-left lg:text-3xl xl:text-4xl font-bold font-serif">
                Payment Examination
              </h1>
              <p className=" text-center lg:text-left mt-4 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quam
                magnam deserunt obcaecati, atque sequi perspiciatis at
                blanditiis dignissimos? Nisi aliquam consectetur laudantium
                quaerat ipsa aut, fuga sapiente laborum quo.
              </p>
            </div>
            <div
              style={{
                clipPath:
                  "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
              }}
              className="absolute z-0 right-0 bottom-0 top-[60%] sm:top-[50%] md:top-0 left-[10%]  md:left-[45%] bg-yellow-100"
            ></div>
          </div>
        </div>
        <div>
          <div className="container overflow-hidden relative flex justify-center   py-6">
            <div className="absolute -z-10 left-0 top-0 mt-[42px] w-full h-1 bg-yellow-300"></div>
            <h1 className="text-2xl font-bold z-20 font-serif text-yellow-300 lg:text-3xl text-center bg-white px-4 ">
              Payment Examination
            </h1>
          </div>
          <MExemList data={data} />
        </div>

        {/* footer */}
        <Footer />
        {/* footer */}
      </main>
    </div>
  );
}

export default index;
