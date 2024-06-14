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
      <h1>Game Results</h1>
      {games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h2>{game.title}</h2>
              {/* <p>{game.short_description}</p>
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