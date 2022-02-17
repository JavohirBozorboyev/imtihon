import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import QuestionsList from '../../../components/Questions/QuestionsList'

function index() {
    const router = useRouter()
    const { id } = router.query
    
  return (
    <div>
      <div className='container'>{id} sahifasi bu</div>
      
      <div>
        <QuestionsList />
      </div>
    </div>
  );
}

export default index