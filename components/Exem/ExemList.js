import React from "react";
import ExemItem from "./ExemItem";



function ExemList({data}) {

  return (
    <div className="flex container  flex-col items-center pb-[60px] md:justify-between  md:flex-row flex-wrap">
      {data.length > 0 ? (
        data.map((item, index) => {
          return <ExemItem key={index} data={item} />;
        })
      ) : (
        <div className="flex justify-center items-center py-6  text-xl text-gray-600">
          Loading...
        </div>
      )}
    </div>
  );
}

export default ExemList;
