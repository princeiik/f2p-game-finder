import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div>
            <Navbar />
            <h1 className='text-center text-5xl font-semibold pt-6'>{game.title}</h1>
            <div className='px-4 py-4'>
                <div className='grid grid-cols-3 grid-rows-3'>
                    {/* Image 1 */}
                    <div className='col-span-2 bg-red-500'>
                        <img className='p-4' src={game.screenshots[0].image} alt="" />
                    </div>
                    <div className='p-4 bg-orange-500'>
                        <div className='text-2xl font-semibold italic text-center '>
                            <p>"{game.short_description}"</p>
                        </div>
                        <div className='pl-4 pt-10'>
                            <ul className='text-lg'>
                                <li className='pb-4'>Status: {game.status}</li>
                                <li className='pb-4'>Genre: {game.genre}</li>
                                <li className='pb-4'>Platform: {game.platform}</li>
                                <li className='pb-4'>Publisher: {game.publisher}</li>
                                <li className='pb-4'>Developer: {game.developer}</li>
                                <li className='pb-4'>Release Date: {game.release_date}</li>
                            </ul>
                        </div>  
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
                        <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <a href={game.game_url}>Click Here</a>
                        </button>
                    </div>
                </div>
            </div>
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