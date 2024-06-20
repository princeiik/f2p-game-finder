import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'

function GameList() {
  const location = useLocation()
  const { genre, platform } = location.state
  const [games, setGames] = useState([])

  useEffect(() => {
    async function fetchGames() {
      let url = "/api/games"
      
      if(genre || platform) {
        url += "?"
        if (genre) url += `category=${genre}&`
        if (platform) url += `platform=${platform}`
        url = url.replace(/[&?]$/, '')
      }

      try {
        const res = await fetch(url)
        const data = await res.json()
        setGames(data)
      } catch (err) {
        console.log("Error fetching data", err);
      }

      // const { data } = await axios.get(url)
      // setGames(data)
    }

    fetchGames()
  }, [genre, platform])

  return (
    <div>
      <h1 className='flex flex-row justify-center py-6'>Game Results</h1>
      {games.length > 0 ? (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-12 pt-8'>
          {games.map((game) => (
            <li key={game.id}>
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={game.thumbnail} alt={`Image of ${game.title}`} />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {game.title}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit truncate antialiased">
                    {game.short_description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
              {/* <h2>{game.title}</h2>
              <p>{game.short_description}</p>
              <img src={game.thumbnail} alt={game.title} /> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No games found.</p>
      )}
    </div>
  )
}

export default GameList