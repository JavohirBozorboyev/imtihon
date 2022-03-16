import React from "react";
import ExemItem from "./ExemItem";



function ExemList({data}) {
  
  return (
    <div className="flex container  flex-col items-center pb-[60px] md:justify-between  md:flex-row flex-wrap">
      {data.map(item => {
        return (
          <ExemItem
            key={item.id}
            data={item}
          />
        );
      })}
    </div>
  );
}

export default ExemList;
