import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div className='max-h-full text-slate-100 bg-indigo-950'>
            <Navbar />
            <h1 className='text-center text-5xl font-semibold pt-6'>{game.title}</h1>
            <div className='px-4 py-4'>
                <div className='grid grid-cols-3 grid-rows'>
                    {/* Image 1 */}
                    <div className='col-span-2'>
                        <img className='p-4' src={game.screenshots[0].image} alt="" />
                    </div>
                    <div className='p-4'>
                        <div className='h-full p-4 bg-indigo-700 rounded-r-lg'>
                            <div className='text-2xl font-semibold italic text-center '>
                                <p>"{game.short_description}"</p>
                            </div>
                            <div className='pl-4 pt-10'>
                                <ul className='text-lg font-medium space-y-10'>
                                    <li>Status: <span className='font-normal'>{game.status}</span></li>
                                    <li>Genre: <span className='font-normal'>{game.genre}</span></li>
                                    <li>Platform: <span className='font-normal'>{game.platform}</span></li>
                                    <li>Publisher: <span className='font-normal'>{game.publisher}</span></li>
                                    <li>Developer: <span className='font-normal'>{game.developer}</span></li>
                                    <li>Release Date: <span className='font-normal'>{game.release_date}</span></li>
                                </ul>
                            </div>  
                        </div>  
                    </div>
                    <div className='p-4'>
                        <div className='bg-purple-700 rounded-l-lg'>
                            <div className='p-4 text-lg'>
                                <p>{game.description}</p>
                            </div>
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
                    <div className='p-4'>
                        <div className=' h-full bg-pink-700 rounded-r-lg'>
                            <div className='p-4'>
                                {game.minimum_system_requirements && (
                                    <h2 className='text-center text-2xl font-semibold'>
                                    Minimum System Requirements:
                                    </h2>
                                )}
                                <div className='pt-10'>
                                    {game.minimum_system_requirements && (
                                        <ul className='text-lg pl-4 font-medium space-y-12'>
                                            {game.minimum_system_requirements.os && (
                                                <li>OS: <span className='font-normal'>{game.minimum_system_requirements.os}</span></li>
                                            )}
                                            {game.minimum_system_requirements.processor && (
                                                <li>Processor: <span className='font-normal'>{game.minimum_system_requirements.processor}</span></li>
                                            )}
                                            {game.minimum_system_requirements.memory && (
                                                <li>RAM: <span className='font-normal'>{game.minimum_system_requirements.memory}</span></li>
                                            )}
                                            {game.minimum_system_requirements.graphics && (
                                                <li>Graphics Card: <span className='font-normal'>{game.minimum_system_requirements.graphics}</span></li>
                                            )}
                                            {game.minimum_system_requirements.storage && (
                                                <li>Storage: <span className='font-normal'>{game.minimum_system_requirements.storage}</span></li>
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