import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="page-not-found w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="mt-4">Srry, the page you are looking for does not exist. <Link className='text-blue-600' href="/">Go back to Home</Link></p>
    </div>
  )
}

export default NotFound