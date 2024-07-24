import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

function Gamepage() {
    const game = useLoaderData()            
    
    return (
        <div className='max-h-full text-slate-100 bg-indigo-950'>
            <Navbar />
            <h1 className='text-center text-5xl font-semibold pt-6'>{game.title}</h1>
            <div className='p-10'>
                <div className='pb-10'>
                    <Carousel images={game.screenshots} />
                </div>
                <div className='flex flex-col gap-y-4'>
                    {/* row 1 */}
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-6 md:h-[500px]'>
                        {/* Image 1 */}
                        {/* <div className='w-full md:w-2/3'>
                            <img className='' src={game.screenshots[0].image} alt="" />
                        </div> */}
                        <div className='flex flex-col w-full md:w-1/2'>
                            <div className=' p-4 gap-y-4 bg-indigo-700 rounded-lg overflow-y-auto md:rounded-none md:h-full md:rounded-l-lg '>
                                <div className='text-xs font-semibold italic text-center pb-4 md:text-lg lg:text-xl xl:text-2xl'>
                                    <p>"{game.short_description}"</p>
                                </div>
                                <div className=''>
                                    <ul className='text-xs space-y-2 font-medium md:text-base md:space-y-4 lg:text-lg lg:space-y-6 lg:space-y-8'>
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
                        <div className='w-full md:w-1/2'>
                            <div className='h-96 overflow-y-hidden hover:overflow-y-auto bg-purple-700 rounded-lg md:h-full md:rounded-none md:rounded-r-lg'>
                                <div className='p-4 text-xs md:text-base lg:text-lg'>
                                    <p className='leading-relaxed'>{game.description}</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
                        {/* Image 2 */}
                        {/* <div className='w-full md:w-2/3'>
                            <img className='' src={game.screenshots[1].image} alt="" />
                        </div>  */}
                    </div>
                    {/* row 3 */}
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
                        {/* Image 3 */}
                        {/* <div className='w-full md:w-2/3'>
                            <img className='' src={game.screenshots[2].image} alt="" />
                        </div> */}
                        <div className='w-full md:px-48'>
                            <div className='h-full bg-pink-700 rounded-lg overflow-y-auto md:h-full md:rounded-none md:rounded-b-lg'>
                                <div className='flex flex-col p-4 text-xs gap-y-4'>
                                    {game.minimum_system_requirements && (
                                        <h2 className='text-center font-semibold md:text-xl lg:pb-4 lg:text-3xl'>
                                        Minimum System Requirements:
                                        </h2>
                                    )}
                                    <div className=''>
                                        {game.minimum_system_requirements && (
                                            <ul className='pl-4 font-medium space-y-4 md:text-base lg:text-lg lg:space-y-8 lg:text-center'>
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
                                    <div className='flex flex-col pt-4 gap-y-4 text-center'>
                                        <p className='text-lg md:font-semibold lg:text-2xl'>Want to learn more about {game.title}?</p>
                                        <div className='md:pt-3'>
                                            <button className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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