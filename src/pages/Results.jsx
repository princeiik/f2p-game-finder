import React from 'react'
import GameList from '../components/GameList'
import Navbar from '../components/Navbar'

function Results() {
  return (
    <div>
      <div className='max-h-full bg-violet-950'>
        <Navbar />
        <h1 className='flex flex-row justify-center py-7 text-4xl text-slate-100'>
          Check out these Free-to-play games!
        </h1>
        <GameList />
      </div>
    </div>
  )
}

export default Results