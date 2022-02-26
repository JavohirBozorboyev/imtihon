import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";


function index() {
  const router = useRouter();
  const { id } = router.query;

  const [questions, setQuestions] = React.useState(10);
  const [time, setTime] = React.useState(15);

  const handleSetQuestions = (e) => {
    setQuestions(e.target.value);
  };
  const handleSetTime = (e) => {
    setTime(e.target.value);
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    await fetch(`http://localhost:3000/test/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: questions,
        time: time,
      }),
    });

    router.push(`/test/${id}`);
  };
  return (
    <div>
      <div className="container bg-white w-full sm:w-8/12 md:w-6/12 lg:w-4/12 shadow min-h-[80vh] mt-2 mb-[65px] py-4 rounded flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between  shadow p-2 rounded">
            <p className="text-xl text-gray-700">Testlar Soni:</p>
            <select
              name=""
              id=""
              value={questions}
              className="p-2 ml-2 rounded text-gray-600 outline-none font-bold shadow"
              onChange={handleSetQuestions}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="flex items-center justify-between mt-4 shadow p-2 rounded">
            <p className="text-xl   text-gray-700">Testlar Vaqti:</p>
            <select
              name=""
              id=""
              className="p-2 ml-2 rounded outline-none shadow text-gray-600 font-bold"
              onChange={handleSetTime}
            >
              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="40">40 min</option>
              <option value="50">50 min</option>
              <option value="60">60 min</option>
              <option value="80">80 min</option>
              <option value="100">100 min</option>
              <option value="120">120 min</option>
            </select>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={handleSubmit}
            className=" shadow-x4  text-gray-700 py-2 text-xl font-bold  w-full rounded transition-all hover:scale-[0.97]"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
