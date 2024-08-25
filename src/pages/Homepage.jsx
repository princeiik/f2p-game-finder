import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import RandomGame from '../components/RandomGame'

function Homepage() {
  return (
    <>
      <div className='h-dvh bg-slate-900'>
        <Navbar />
        <div className='text-center pt-6'>
          <h1 className="text-4xl font-bold text-slate-100 shadow-white"> Search Free-to-Play Games </h1>
        </div>
        <div>
          <Form />
        </div>
        <div className='text-center text-2xl  text-slate-100 shadow-white'>
          <h2>_______________________________________________________________</h2>
          <h1 className='py-3'>OR</h1>
          <h2 className=''>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</h2>
        </div>
        <div className='text-center pt-6'>
          <h1 className="text-4xl font-bold text-slate-100 shadow-white"> Search a Random Free-to-Play Game</h1>
        </div>
        <div className='text-center pt-8'>
          <RandomGame />
        </div>
      </div>
    </>
  )
}

export default Homepage