import React, { useState } from "react";

function QuestionsItem({
  item,
  index,
  trueAns,
  setTrueAns,
  endbtn,
  setEndbtn,
  
}) {
  // random logic
  const ques = [item.answer, item.altanswer1, item.altanswer2, item.altanswer3];
  const ad = [];

  const [ random, setRandom ] = React.useState(Math.floor(Math.random() * 4));
  const [ svalue, setSvalue ] = React.useState(null);
  
  

  switch (ques[random]) {
    case ques[0]:
      ad.push(ques[0], ques[3], ques[2], ques[1]);
      break;
    case ques[1]:
      ad.push(ques[1], ques[0], ques[3], ques[2]);
      break;
    case ques[2]:
      ad.push(ques[2], ques[1], ques[0], ques[3]);
      break;
    case ques[3]:
      ad.push(ques[3], ques[2], ques[1], ques[0]);
      break;
    default:
      break;
  }

  
  function AnsverBtn(e) {
    var value = e.target.value;
    setSvalue(value);
  }

  
  

  return (
    <div className=" w-full  border-2 mt-4 rounded cursor-pointer overflow-hidden">
      <div className=" flex items-start flex-col border-b-2    overflow-hidden">
        <p className="   text-xl text-white font-bold bg-green-300  px-4 py-1 rounded-br-md  ">
          {index + 1}
        </p>
        <p
          className="text-gray-800 p-2 text-xl"
          dangerouslySetInnerHTML={{
            __html: `<div>${item.question}</div>`,
          }}
        ></p>
      </div>
      <div className=" flex items-center bg-white px-2 border-b-2">
        <input
          type="radio"
          onClick={AnsverBtn}
          value={ad[0]}
          name={item.question}
          id={index + 500}
        />

        <label
          htmlFor={index + 500}
          className=" block py-2 text-gray-600 w-full ml-4 text-justify text-base pr-1"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: `<div>${ad[0]}</div>`,
            }}
          ></p>
        </label>
      </div>
      <div className=" flex items-center bg-white px-2 border-b-2 ">
        <input
          type="radio"
          onClick={AnsverBtn}
          value={ad[1]}
          name={item.question}
          id={index + 1000}
        />

        <label
          htmlFor={index + 1000}
          className="block w-full text-gray-600 py-2 ml-4 text-justify text-base pr-1 "
        >
          <p
            dangerouslySetInnerHTML={{
              __html: `<div>${ad[1]}</div>`,
            }}
          ></p>
        </label>
      </div>
      <div className=" flex items-center bg-white px-2 border-b-2 ">
        <input
          type="radio"
          onClick={AnsverBtn}
          value={ad[2]}
          name={item.question}
          id={index + 1500}
        />

        <label
          htmlFor={index + 1500}
          className=" block w-full text-gray-600 py-2 ml-4 text-justify text-base pr-1"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: `<div>${ad[2]}</div>`,
            }}
          ></p>
        </label>
      </div>
      <div className=" flex items-center bg-white px-2 ">
        <input
          type="radio"
          onClick={AnsverBtn}
          value={ad[3]}
          name={item.question}
          id={index + 2000}
        />
        <label
          htmlFor={index + 2000}
          className=" block w-full text-gray-600 py-2 ml-4 text-justify text-base pr-1 "
        >
          <p
            dangerouslySetInnerHTML={{
              __html: `<div>${ad[3]}</div>`,
            }}
          ></p>
        </label>
      </div>
    </div>
  );
}

export default QuestionsItem;
