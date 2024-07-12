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
                    <div className='col-span-2'>
                        <img className='p-4' src={game.screenshots[0].image} alt="" />
                    </div>
                    <div className='p-4 bg-indigo-500 rounded-r-lg'>
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
                    <div className='bg-purple-500 rounded-l-lg'>
                        <div className='p-4 text-lg'>
                            <p>{game.description}</p>
                        </div>
                        
                    </div>
                    {/* Image 2 */}
                    <div className='col-span-2'>
                        <img className='p-4' src={game.screenshots[1].image} alt="" />
                    </div>
                    {/* Image 3 */}
                    <div className='col-span-2'>
                        <img className='p-4' src={game.screenshots[2].image} alt="" />
                    </div>
                    <div className='bg-pink-500 rounded-r-lg'>
                        <div className='p-4'>
                            {game.minimum_system_requirements && (
                                <h2 className='text-center text-2xl font-semibold'>
                                Minimum System Requirements:
                                </h2>
                            )}
                            <div className='pt-10'>
                                {game.minimum_system_requirements && (
                                    <ul className='text-lg'>
                                        {game.minimum_system_requirements.os && (
                                            <li className='pt-4'>OS: {game.minimum_system_requirements.os}</li>
                                        )}
                                        {game.minimum_system_requirements.processor && (
                                            <li className='pt-4'>Processor: {game.minimum_system_requirements.processor}</li>
                                        )}
                                        {game.minimum_system_requirements.memory && (
                                            <li className='pt-4'>RAM: {game.minimum_system_requirements.memory}</li>
                                        )}
                                        {game.minimum_system_requirements.graphics && (
                                            <li className='pt-4'>Graphics Card: {game.minimum_system_requirements.graphics}</li>
                                        )}
                                        {game.minimum_system_requirements.storage && (
                                            <li className='pt-4'>Storage: {game.minimum_system_requirements.storage}</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                            <div className='pt-12 text-center'>
                                <p className='text-2xl'>Want to learn more about {game.title}?</p>
                                <div className='pt-10'>
                                    <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    >
                                    <a href={game.game_url}>Click Here</a>
                                    </button>
                                </div>
                                
                            </div>   
                        </div>
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