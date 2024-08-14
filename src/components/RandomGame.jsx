import React from 'react'
import useFetchGames from '../hooks/useFetchGames'

function RandomGame() {
    

    return (
        <div>
            <div>
                <h1 className='text-white'>Pick a game at random</h1>
            </div>
            <div className="p-6 pt-0">
                <button onClick={showInfo} className='text-white'>
                    Click here
                </button>
            </div>
        </div>
    )
}

export default RandomGame