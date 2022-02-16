import React from "react";
import { useRouter } from "next/router";
import ThemaList from "../../../components/Thema/ThemaList";

const res = [
  {
    id: 1,
    name: "Thema 1",
    total: 1500,
  },
  {
    id: 2,
    name: "Thema 2",
    total: 5500,
  },
  {
    id: 3,
    name: "Thema 3",
    total: 100,
  },
  {
    id: 4,
    name: "Thema 4",
    total: 400,
  },
  {
    id: 5,
    name: "Thema 5",
    total: 500,
  },
  {
    id: 6,
    name: "Thema 6",
    total: 5500,
  },
];

function index() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className=" container">
      <h1>Bu usha sahifa {name}</h1>
      <div>
        
      </div>
      <ThemaList data={res}  />
    </div>
  );
}

export default index;
