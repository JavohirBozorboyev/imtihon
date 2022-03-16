import React from "react";
import { useRouter } from "next/router";

const  BlogId = ({ article })=> {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container pb-[60px]">
      <div className="realative h-[400px] bg-sky-300 mt-2 rounded-md">
        {/* img block */}
      </div>
      <div className=" p-2 shadow mt-2 ">
        <h1 className=" capitalize text-2xl font-bold text-gray-700">
          {article.title}
        </h1>
      </div>
      <div className=" p-2 shadow mt-2">
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default BlogId;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
