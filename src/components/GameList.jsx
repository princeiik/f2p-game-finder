import React from 'react'
import { Link } from 'react-router-dom'
import useFetchGames from '../hooks/useFetchGames'
import GameCard from './GameCard'
import Pagination from './Pagination'

function GameList() {
  const { games, currentGames, currentPage, totalPages, changePage} = useFetchGames()

  function handleNextPage() {
    if(currentPage < totalPages) {
      changePage(currentPage + 1)
    }
  }

  function handlePreviousPage() {
    if(currentPage > 1) {
      changePage(currentPage - 1)
    }
  }

  return (
    <>
      <div>
        <Pagination 
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        />
      </div>
      <div className='py-2'>
        {currentGames.length > 0 ? (
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-12 pt-8 '>
            {currentGames.map((game, index) => (
              <GameCard
                key={index}
                id={game.id}
                thumbnail={game.thumbnail}
                title={game.title}
                shortDescription={game.short_description}
              />
            ))}
          </ul>
        ) : (
          <p>No games found.</p>
        )}
      </div>
    </>
  )
}

export default GameList