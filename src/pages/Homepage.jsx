import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <>
        <Navbar />
        <div className='flex justify-center pt-4'>
          <h1 className="text-3xl font-bold underline"> Search Free-to-Play Games </h1>
        </div>  
        <Form />
    </>
  )
}

export default Homepage