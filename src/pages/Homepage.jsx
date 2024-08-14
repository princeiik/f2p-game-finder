import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import RandomGame from '../components/RandomGame'

function Homepage() {
  return (
    <>
      <div className='h-dvh bg-violet-950'>
        <Navbar />
        <div className='text-center pt-6'>
          <h1 className="text-4xl font-bold text-slate-100 shadow-white "> Search Free-to-Play Games </h1>
        </div>
        <div>
          <Form />
        </div>  
        <div>
          {/* <RandomGame /> */}
        </div>
      </div>
    </>
  )
}

export default Homepage