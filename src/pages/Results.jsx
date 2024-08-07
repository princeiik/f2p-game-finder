import React from 'react'
import GameList from '../components/GameList'
import Navbar from '../components/Navbar'

function Results() {
  return (
    <div className='min-h-screen bg-violet-950'>
      <Navbar />
      <div className=''>
        <div className='text-center'>
          <h1 className='py-7 text-4xl text-slate-100'>
            Check out these Free-to-play games!
          </h1>
        </div>
        <div>
          <GameList />
        </div>
      </div>
    </div>
  )
}

export default Results