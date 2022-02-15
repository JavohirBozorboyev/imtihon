import React from "react";
import ExemList from "../../components/Exem/ExemList";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Imtihon || Exem</title>
        <meta name="description" content="Imtihon.uz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" container ">
        <ExemList data={data} />
      </div>
    </div>
  );
}

export default index;
