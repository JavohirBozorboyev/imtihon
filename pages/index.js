import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Imtihon</title>
        <meta name="description" content="Imtihon.uz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container flex items-center justify-center">Home page</div>
      </main>
    </div>
  );
}
