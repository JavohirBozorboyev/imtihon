import React from 'react'
import MExemIteam from './MExemIteam'

function MExemList({data}) {
  return (
    <div className="flex container  flex-col items-center pb-[60px] justify-between md:flex-row flex-wrap">
      {data.map((item) => {
        return <MExemIteam key={item.id} data={item} />;
      })}
    </div>
  );
}

export default MExemList