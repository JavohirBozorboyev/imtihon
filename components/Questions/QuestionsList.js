import React from "react";
import QuestionsItem from "./QuestionsItem";

const data = [
  {
    id: 1,
    name: "test",
  },
  {
    id: 2,
    name: "test1",
  },
  {
    id: 3,
    name: "test2",
  },
  {
    id: 4,
    name: "test3",
  },
  {
    id: 5,
    name: "test4",
  },
];

function QuestionsList() {
  return (
    <div className=" container flex flex-col flex-wrap lg:flex-row pb-[65px] px-0 ">
      {data.map((item) => {
        return <QuestionsItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default QuestionsList;
