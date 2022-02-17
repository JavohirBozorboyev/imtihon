import React from 'react'
import BlogList from '../../components/Blog/BlogList'

function index({posts}) {
  return (
    <div>
      <BlogList data={posts} />
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}