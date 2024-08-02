import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useFetchGames() {
    const location = useLocation()
    const { genre, platform } = location.state
    const [games, setGames] = useState([])

    useEffect(() => {
      async function fetchGames() {
        let url = "/api/games"
        
        //Create URL from dropdown selection
        if(genre || platform) {
          url += "?"
          if (genre) url += `category=${genre}&`
          if (platform) url += `platform=${platform}`
          url = url.replace(/[&?]$/, '')
        }
        
        //Fetch information based on URL 
        try {
          const res = await fetch(url)
          const data = await res.json()
          setGames(data)
        } catch (err) {
          console.log("Error fetching data", err);
        }
      }

      fetchGames()
    }, [genre, platform])
    
    return { games }
}

export default useFetchGames