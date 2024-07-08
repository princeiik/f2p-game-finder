import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <>
      <div className='h-dvh bg-violet-950'>
        <Navbar />
        <div className='text-center pt-6'>
          <h1 className="text-3xl font-bold text-slate-100 shadow-white underline"> Search Free-to-Play Games </h1>
        </div>  
        <Form />
      </div>
    </>
  )
}

export default Homepage