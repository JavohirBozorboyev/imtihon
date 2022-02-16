import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function index() {
    const router = useRouter()
    const { id } = router.query
    
  return (
    <div className='container'>
      
      {id} sahifasi bu


    </div>
  )
}

export default index