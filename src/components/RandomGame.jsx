import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchGames from '../hooks/useFetchGames'

function RandomGame() {
    const { games } = useFetchGames()
    const navigate = useNavigate()

    let randomizeGame = Math.floor(Math.random() * games.length) 

    function randomGame() {
        console.log(games[randomizeGame].id);
        return navigate(`/results/${games[randomGame].id}`)
    }

    return (
        <div>
            <div>
                <h1 className='text-white text-sm text-center font-medium leading-6 text-slate-100'>Click to find random free-to-play game</h1>
            </div>
            <div className="p-6 pt-4">
                <button 
                    onClick={randomGame}
                    className='select-none rounded-lg bg-purple-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    >
                    RANDOMIZE
                </button>
                {/* <Link
                  to={`/results/${gameID}`}
                  className='select-none rounded-lg bg-purple-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                >
                  Click me
                </Link> */}
            </div>
        </div>
    )
}

export default RandomGame