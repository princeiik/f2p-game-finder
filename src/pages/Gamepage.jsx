import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div>
            <Navbar />
            <h1>{game.title}</h1>
            <div className='flex flex-row flex-wrap'>
                <div className='basis-1/2 bg-red-500'>
                    <h2>Game Image and screenshot</h2>
                </div>
                <div className='basis-1/2 bg-blue-500'>
                    <h2>Game information</h2>
                </div>
                <div className='basis-full bg-green-500'>
                    <h2>Description and Game site link</h2>
                </div>
            </div>
            {/* <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={`Image of ${game.title}`} />
            <p>{game.short_description}</p>
            <p>{game.developer}</p> */}
            {/* Add more game details here */}
        </div>
    )
}

async function gameLoader({ params }) {
    const { id } = params
    const res = await fetch(`api/game?id=${id}`)
    const data = await res.json()
    return data
}

export { Gamepage as default, gameLoader }