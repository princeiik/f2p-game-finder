import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div>
            <Navbar />
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={`Image of ${game.title}`} />
            <p>{game.short_description}</p>
            <p>{game.developer}</p>
            {/* Add more game details here */}
        </div>
    )
}

async function gameLoader( {params }) {
    const { id } = params
    const res = await fetch(`api/game?id=${id}`)
    const data = await res.json()
    return data
}

export { Gamepage as default, gameLoader }