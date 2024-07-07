import React from 'react'
import GameList from '../components/GameList'
import Navbar from '../components/Navbar'

function Results() {
  return (
    <div>
        <Navbar />
        <h1 className='flex flex-row justify-center pt-6 text-4xl'>
          Check out these Free-to-play games!
        </h1>
        <GameList />
    </div>
  )
}

export default Results