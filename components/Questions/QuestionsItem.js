import React from 'react'

function QuestionsItem() {
  return (
    <div className=" shadow-md mt-4 rounded-md cursor-pointer overflow-hidden">
      <div className=" flex items-center bg-gray-600  p-2 py-4 overflow-hidden">
        <p className="   text-xl text-white font-bold">1</p>
        <p className=" ml-6 text-justify text-lg text-white pr-1">
          Maxsus Savollar to'plami Va maxsus savol. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex items-center bg-white p-2 border-b-2 overflow-hidden">
        <input type="radio" name="radio" />
        <p className=" ml-4 text-xl  ">A</p>

        <p className=" ml-4 text-justify text-base pr-1">
          Maxsus Savollar to'plami Va maxsus savol. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex items-center bg-white p-2 border-b-2 overflow-hidden">
        <input type="radio" name="radio" />
        <p className="  text-xl ml-4 ">B</p>

        <p className=" ml-4 text-justify text-base pr-1 ">
          Maxsus Savollar to'plami Va maxsus savol. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex items-center bg-white p-2 border-b-2 overflow-hidden">
        <input type="radio" name="radio" />
        <p className="text-xl ml-4 ">C</p>
        <p className=" ml-4 text-justify text-base pr-1">
          Maxsus Savollar to'plami Va maxsus savol. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Similique beatae repellendus fugit fuga
          perspiciatis eius autem ea porro voluptatem .
        </p>
      </div>
      <div className=" flex items-center bg-white p-2 overflow-hidden">
        <input type="radio" name="radio" />
        <p className="text-xl ml-4 ">D</p>
        <p className=" ml-4 text-justify text-base pr-1 ">
          Maxsus Savollar to'plami Va maxsus savol. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Similique beatae repellendus fugit fuga
          perspiciatis eius autem ea porro voluptatem .
        </p>
      </div>
    </div>
  );
}

export default QuestionsItem