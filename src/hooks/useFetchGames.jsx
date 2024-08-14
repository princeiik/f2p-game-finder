import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useFetchGames() {
    const location = useLocation()
    const { genre, platform } = location.state || {}
    const [games, setGames] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(8)

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

    const indexOfLastGame = currentPage * gamesPerPage
    const indexOfFirstGame = indexOfLastGame - gamesPerPage
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame)

    const totalPages = Math.ceil(games.length/gamesPerPage)
    
    function changePage(newPage) {
      setCurrentPage(newPage)
    }
    
    return { games, currentGames, currentPage, totalPages, changePage }
}

export default useFetchGames