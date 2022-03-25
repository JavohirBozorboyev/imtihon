import React from "react";
import QuestionsItem from "./QuestionsItem";

function QuestionsList({ data, trueAns, setTrueAns, endbtn, setEndbtn }) {
  return (
    <div className=" container flex  flex-wrap justify-around items-start lg:flex-row pb-[65px] px-0 ">
      {data.map((item, index) => {
        return (
          <QuestionsItem
            key={index}
            item={item}
            index={index}
            trueAns={trueAns}
            setTrueAns={setTrueAns}
            endbtn={endbtn}
            setEndbtn={setEndbtn}
           

            
          />
        );
      })}
    </div>
  );
}

export default QuestionsList;
