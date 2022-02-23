import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import banner from "../img/banner.png";
import H1 from "../layout/home/h1/H1";
import HomeServise from "../layout/home/servise/HomeServise";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Imtihon</title>
        <meta name="description" content="Imtihon.uz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* header */}
        <div
          style={{
            background: "linear-gradient(to right, mintcream, #faffd1)",
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 92%)",
          }}
          className=" min-h-[80vh] py-12  flex overflow-hidden justify-center items-center"
        >
          <div className="container flex items-center flex-col md:flex-row  ">
            <div className="w-full md:w-6/12">
              <h1 className="text-green-400  text-4xl lg:text-6xl capitalize font-serif">
                O'z bilimingizni sinab ko'ring
              </h1>
              <p className=" mt-4 text-base md:text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                delectus, beatae aliquid exercitationem magni maxime repellendus
                reiciendis officia ipsa.
              </p>
              <div className="mt-12">
                <Link href="/exem">
                  <a className=" py-2 shadow-x5 shadow-green-300 bg-green-300 px-6 font-bold text-white text-xl rounded-md duration-500 hover:bg-gray-600 hover:shadow-gray-600">
                    Start Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12 mt-10 md:mt-0 ">
              <Image src={banner} layout="responsive" />
            </div>
          </div>
        </div>
        {/* header end */}

        {/* servise */}
        <div className="-mt-4 ">
          <HomeServise />
        </div>
        {/* servise end */}

        {/* home 1 */}
        <div>
          <H1 />
        </div>
        {/* home 1 end */}
      </main>
    </div>
  );
}
