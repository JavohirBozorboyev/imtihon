import React from "react";
import { useRouter } from "next/router";
import ThemaList from "../../../components/Thema/ThemaList";


const ExemThema = ({ data }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className=" container">
      <ThemaList data={data} tName={name} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://onexam.uz/public/api/exams/${context.query.name}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ExemThema;
