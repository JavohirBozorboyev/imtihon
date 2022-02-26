import React from "react";
import Image from "next/image";
import ExamBanner from "../../../img/ExamBanner.jpg";

function HomeExemBox() {
  return (
    <div className="overflow-hidden bg-[mintcream]">
      <div className="container relative flex justify-center mt-20">
        <h1 className="text-2xl z-10 md:text-3xl lg:text-4xl px-4 bg-white uppercase border-2 border-green-300 font-bold font-serif text-center rotate-2 text-green-300">
          Examiation
        </h1>
        <div className="absolute left-0 right-0 h-[4px] bg-green-300 rotate-2 mt-[16px] md:mt-[20px] "></div>
      </div>
      <div className="container flex  flex-col md:flex-row items-center py-12 pt-8 md:pt-6">
        <div className="w-full relative flex justify-center md:w-6/12 px-4">
          <article className=" absolute left-[5%] right-[5%]  bottom-[-5%] top-[-5%] rounded rotate-3 bg-green-300"></article>
          <Image
            src={ExamBanner}
            alt="Examiation"
            width={400}
            height={350}
            placeholder="blur"
            objectFit="cover"
            className="rounded-md  "
          />
        </div>
        <div className=" mt-12 w-full md:w-6/12 flex flex-wrap justify-around">
          <article className="shadow-x4 flex flex-col items-start border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className=" bg-gray-700 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#86faac"
              >
                <path d="M4 15h5v1h-5v-1zm8-1h-8v-1h8v1zm1.502 4h-11.002c-.276 0-.5-.224-.5-.5v-6.5h12.82c1.184-1.23 2.842-2 4.68-2 .886 0 1.729.179 2.5.501v-3.501c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h12.82c-.553-.576-1.006-1.251-1.318-2zm-11.502-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5zm22 9c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z" />
              </svg>
            </div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">
              Free Examination
            </h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
          <article className="shadow-x4 flex flex-col items-start border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className="p-2 bg-gray-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#86faac"
              >
                <path d="M12.164 7.165c-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.039-.257 1.519-1.252 1.069-2.295-.471-1.095-1.784-1.827-2.932-1.636zm1.484 2.998l.104.229-.219.045-.097-.219c-.226.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.152-.387-.176-.453-.245-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.17-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.173.385-.028.648-.36.774zm10.312 1.057l-3.766-8.22c-6.178 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.454zm-2.803-1.852c-.375.521-.653 1.117-.819 1.741-3.593 1.094-7.891-.201-12.018 1.241-.667-.354-1.503-.576-2.189-.556l-1.135-2.487c.432-.525.772-1.325.918-2.094 3.399-1.226 7.652.155 12.198-1.401.521.346 1.13.597 1.73.721l1.315 2.835zm2.843 5.642c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593z" />
              </svg>
            </div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">
              Payment Examination
            </h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
          <article className="shadow-x4 flex flex-col items-start border-l-8 mt-4 border-green-300 rotate-3 shadow-green-300 p-4 rounded-md w-full sx:w-10/12 sm:w-[47%]">
            <div className="p-2  bg-gray-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#86faac"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm1 13.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.385-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.725.019 1.535.145 2.442.42l-.362 1.648c-.768-.27-1.616-.515-2.442-.465-1.489.087-1.62 1.376-.581 1.916 1.711.804 3.943 1.401 3.943 3.546.002 1.718-1.344 2.632-3 2.864z" />
              </svg>
            </div>
            <h3 className=" mt-4 font-bold text-green-300 capitalize text-xl">
              Premium Examination
            </h3>
            <p className="text-base text-gray-500 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
              velit.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default HomeExemBox;
