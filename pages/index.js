import Head from "next/head";


import HomeExemBox from "../layout/home/HomeExemBox/HomeExemBox";
import HomeBlogBox from "../layout/home/HomeBlogBox/HomeBlogBox";
import HomeHeader from "../layout/home/HomeHeader/HomeHeader";
import HomeServise from "../layout/home/servise/HomeServise";
import Footer from "../components/Footer/Footer";

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
        <HomeHeader />
        {/* header end */}

        {/* servise */}
        <div className="-mt-4 ">
          <HomeServise />
        </div>
        {/* servise end */}

        {/* HomeExamBox */}
        <div style={{ clipPath: "polygon(0 0, 100% 7%, 100% 100%, 0% 100%)" }}>
          <HomeExemBox />
        </div>
        {/* HomeExamBox */}

        {/* HomeGroupBox */}
        <div>
          <HomeBlogBox />
        </div>
        {/* HomeGroupBox */}

        {/* footer */}
        <Footer />
        {/* footer */}
      </main>
    </div>
  );
}
