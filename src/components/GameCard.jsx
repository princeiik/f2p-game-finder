import React from 'react'
import { Link } from 'react-router-dom'
// import useFetchGames from '../hooks/useFetchGames'

function GameCard({ id, thumbnail, title, shortDescription}) {
    // const { games } = useFetchGames()

    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-violet-50 bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={thumbnail} alt={`Image of ${title}`} />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit truncate antialiased">
                  {shortDescription}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link
                  to={`/results/${id}`}
                  className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                >
                  Read more
                </Link>
            </div>
        </div>
    )
}

export default GameCard