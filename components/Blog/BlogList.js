import React from 'react'
import BlogItem from './BlogItem'




function BlogList({data}) {

  return (
    <div className="container  py-4 pb-20 flex flex-wrap flex-col sm:flex-row items-start justify-between ">
      {
        data.map(item=>{
          return(
            <BlogItem key={item.id} item={item} />
          )
        })
      }
      
    </div>
  );
}

export default BlogList