import React from 'react'
import ThemaItem from './ThemaItem'

function ThemaList({data, tName}) {

  return (
    <div className=' flex flex-col  pb-[70px] justify-around flex-wrap sm:flex-row'>
      {data.length > 0 ? data.map(item => {
        return (
          <ThemaItem
            key={item.id}
            data={item}
            tName={tName}
          />
        )
      }) : <div className=' flex justify-center items-center  h-[70vh] text-xl text-gray-600'>Loading...</div>}
    </div>
  );
}

export default ThemaList