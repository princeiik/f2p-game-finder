import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div>
            <Navbar />
            <h1 className='text-center'>{game.title}</h1>
            <div className='px-4 py-4'>
                <div className='grid grid-cols-3 grid-rows-3'>
                    {/* Image 1 */}
                    <div className='col-span-2 bg-red-500'>
                        <img className='p-4' src={game.screenshots[0].image} alt="" />
                    </div>
                    <div className='bg-orange-500'>
                        <p>{game.short_description}</p>
                        <ul>
                            <li>Status: {game.status}</li>
                            <li>Genre: {game.genre}</li>
                            <li>Platform: {game.platform}</li>
                            <li>Publisher: {game.publisher}</li>
                            <li>Developer: {game.developer}</li>
                            <li>Release Date: {game.release_date}</li>
                        </ul>
                    </div>
                    <div className='bg-yellow-500'>
                        <p>{game.description}</p>
                    </div>
                    {/* Image 2 */}
                    <div className='col-span-2 bg-green-500'>
                        <img className='p-4' src={game.screenshots[1].image} alt="" />
                    </div>
                    {/* Image 3 */}
                    <div className='col-span-2 bg-blue-500'>
                        <img className='p-4' src={game.screenshots[2].image} alt="" />
                    </div>
                    <div className='bg-purple-500'>
                        Minimum System Requirements:
                        <ul>
                            <li>{game.minimum_system_requirements.os}</li>
                            <li>{game.minimum_system_requirements.processor}</li>
                            <li>{game.minimum_system_requirements.memory}</li>
                            <li>{game.minimum_system_requirements.graphics}</li>
                            <li>{game.minimum_system_requirements.storage}</li>
                        </ul>
                        <p>Want to learn more about {game.title}?</p>
                        <button>
                            <a href={game.game_url}>Click Here</a>
                        </button>
                    </div>
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