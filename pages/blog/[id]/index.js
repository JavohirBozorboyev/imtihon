import React from 'react'
import { useRouter} from 'next/router'

function index() {
    const router = useRouter();
    const {id} = router.query
  return (
    <div className='container'> Blog {id}</div>
  )
}

export default index