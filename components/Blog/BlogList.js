import React from 'react'
import BlogItem from './BlogItem'


const data = [
  {
    id: 1,
    name: "Arslonov Doniyor",
    userimg: "",
    info: {
      id: 1,
      title: "Mavzu nomlar uchun title",
      des: "#Matematika #Fizika #Ingliz-tili",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dolorem blanditiis quibusdam quidem quis rerum, vero placeat aut ratione eaque doloremque distinctio voluptatem minima dolor saepe consequuntur consequatur nobis inventore!",
    },
  },
  {
    id: 2,
    name: "John Doe",
    userimg: "",
    info: {
      id: 1,
      title: "Mavzu nomlar uchun title",
      des: "#Matematika #Fizika #Ingliz-tili",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dolorem blanditiis quibusdam quidem quis rerum, vero placeat aut ratione eaque doloremque distinctio voluptatem minima dolor saepe consequuntur consequatur nobis inventore!",
    },
  },
  {
    id: 3,
    name: "Leo Mark",
    userimg: "",
    info: {
      id: 1,
      title: "Mavzu nomlar uchun title",
      des: "#Matematika #Fizika #Ingliz-tili",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dolorem blanditiis quibusdam quidem quis rerum, vero placeat aut ratione eaque doloremque distinctio voluptatem minima dolor saepe consequuntur consequatur nobis inventore!",
    },
  },
  {
    id: 4,
    name: "Mark Sukerberk",
    userimg: "",
    info: {
      id: 1,
      title: "Mavzu nomlar uchun title",
      des: "#Matematika #Fizika #Ingliz-tili",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dolorem blanditiis quibusdam quidem quis rerum, vero placeat aut ratione eaque doloremque distinctio voluptatem minima dolor saepe consequuntur consequatur nobis inventore!",
    },
  },
];

function BlogList() {
  return (
    <div className="container px-0 py-4 pb-20 flex flex-wrap flex-col sm:flex-row items-center justify-between ">
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