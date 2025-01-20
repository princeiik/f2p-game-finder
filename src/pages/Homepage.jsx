import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import RandomGame from '../components/RandomGame'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='z-10'>
        <Navbar />
      </header>
      <main className="flex-grow bg-slate-900">
        <div className='text-center pt-6'>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-100 shadow-white"> Search Free-to-Play Games </h1>
        </div>
        <div>
          <Form />
        </div>
        <div className='text-center text-2xl  text-slate-100 shadow-white'>
          <hr className="my-4 border-slate-100"/>
          <h1 className='py-3'>OR</h1>
          <hr className="my-4 border-slate-100"/>
        </div>
        <div className='text-center pt-6'>
          <h1 className="text-4xl font-bold text-slate-100 shadow-white"> Search a Random Free-to-Play Game</h1>
        </div>
        <div className='text-center pt-8'>
          <RandomGame />
        </div>
      </main>
      <footer className=''>
        <Footer />
      </footer>
    </div>
    // <>
    //   <div className='w-full min-h-screen bg-slate-900'>
    //     <Navbar />
    //     <div className='text-center pt-6'>
    //       <h1 className="text-2xl md:text-4xl font-bold text-slate-100 shadow-white"> Search Free-to-Play Games </h1>
    //     </div>
    //     <div>
    //       <Form />
    //     </div>
    //     <div className='text-center text-2xl  text-slate-100 shadow-white'>
    //       <hr className="my-4 border-slate-100"/>
    //       <h1 className='py-3'>OR</h1>
    //       <hr className="my-4 border-slate-100"/>
    //     </div>
    //     <div className='text-center pt-6'>
    //       <h1 className="text-4xl font-bold text-slate-100 shadow-white"> Search a Random Free-to-Play Game</h1>
    //     </div>
    //     <div className='text-center pt-8'>
    //       <RandomGame />
    //     </div>
    //     <footer>
    //         <Footer />
    //     </footer>
    //   </div>
    // </>
  )
}

export default Homepage