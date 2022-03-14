import React from 'react'
import ThemaItem from './ThemaItem'

function ThemaList({data, tName}) {

  return (
    <div className=' flex flex-col items-center pb-[70px] justify-between flex-wrap sm:flex-row'>
      {data.map(item => {
        return (
          <ThemaItem
            key={item.id}
            data={item}
            tName={tName}
          />
        )
      })}
    </div>
  );
}

export default ThemaList