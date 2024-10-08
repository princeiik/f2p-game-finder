import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import { BsCircleFill } from "react-icons/bs";

function Gamepage() {
    const game = useLoaderData()        
    
    return (
        <div className='max-h-full text-slate-100 bg-slate-900'>
            <Navbar />
            <h1 className='text-center text-5xl font-semibold pt-6'>{game.title}</h1>
            <div className='p-10'>
                <div className='pb-10'>
                    <Carousel images={game.screenshots} />
                </div>
                <div className='flex flex-col gap-y-4'>
                    {/* Game Description Section */}
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-6 md:h-[500px]'>
                        <div className='flex flex-col w-full md:w-1/2'>
                            <div className=' p-4 gap-y-4 bg-indigo-700 rounded-lg overflow-y-auto md:rounded-none md:h-full md:rounded-l-lg '>
                                <div className='text-xs font-semibold italic text-center pb-4 md:text-lg lg:text-xl xl:text-2xl'>
                                    <p>"{game.short_description}"</p>
                                </div>
                                <div className='text-xs md:text-base lg:text-lg 2xl:text-2xl'>
                                    <div className='grid grid-cols-1 divide-y'>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                            <div className='font-medium'>Status:</div>
                                            <div className='justify-self-end flex item-center'>
                                                <span className='text-green-500 my-1 px-2 '><BsCircleFill /></span>
                                                {game.status}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                            <div className='font-medium'>Genre</div>
                                            <div className='justify-self-end'>{game.genre}</div> 
                                        </div>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                           <div className='font-medium'>Platform:</div>
                                            <div className='justify-self-end'>{game.platform}</div> 
                                        </div>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                           <div className='font-medium'>Publisher:</div>
                                            <div className='justify-self-end'>{game.publisher}</div> 
                                        </div>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                            <div className='font-medium'>Developer:</div>
                                            <div className='justify-self-end'>{game.developer}</div>
                                        </div>
                                        <div className='grid grid-cols-2 py-2 md:py-3'>
                                            <div className='font-medium'>Release Date:</div>
                                            <div className='justify-self-end'>{game.release_date}</div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        {/* Description Section */}
                        <div className='w-full md:w-1/2'>
                            <div className='h-96 overflow-y-hidden hover:overflow-y-auto bg-purple-700 rounded-lg md:h-full md:rounded-none md:rounded-r-lg'>
                                <div className='p-4 text-xs md:text-base lg:text-lg xl:text-xl'>
                                    <p className='leading-relaxed'>{game.description}</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
                    </div>
                    {/* System Requirements Section */}
                    <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
                        <div className='w-full md:px-28 lg:px-44 xl:px-72'>
                            <div className='h-full bg-pink-700 rounded-lg overflow-y-auto md:h-full md:rounded-none md:rounded-b-lg'>
                                <div className='flex flex-col p-4 text-xs gap-y-4 xl:p-6'>
                                    {game.minimum_system_requirements && (
                                        <h2 className='text-center font-semibold md:text-xl lg:pb-4 lg:text-3xl '>
                                        Minimum System Requirements:
                                        </h2>
                                    )}
                                    <div className='text-xs md:text-base lg:text-lg 2xl:text-2xl'>
                                        {game.minimum_system_requirements && (
                                            <div className='grid grid-cols-1 divide-y'>
                                                {game.minimum_system_requirements.os && (
                                                <div className='grid grid-cols-2 py-2 md:py-3'>
                                                    <div className='font-medium'>OS:</div>
                                                    <div className='justify-self-end'>{game.minimum_system_requirements.os}</div>
                                                </div>
                                                )}
                                                {game.minimum_system_requirements.processor && (
                                                <div className='grid grid-cols-2 py-2 md:py-3'>
                                                    <div className='font-medium'>Processor:</div>
                                                    <div className='justify-self-end'>{game.minimum_system_requirements.processor}</div> 
                                                </div>
                                                )}
                                                {game.minimum_system_requirements.memory && (
                                                <div className='grid grid-cols-2 py-2 md:py-3'>
                                                   <div className='font-medium'>RAM:</div>
                                                    <div className='justify-self-end'>{game.minimum_system_requirements.memory}</div> 
                                                </div>
                                                )}
                                                {game.minimum_system_requirements.graphics && (
                                                <div className='grid grid-cols-2 py-2 md:py-3'>
                                                   <div className='font-medium'>Graphics Card:</div>
                                                    <div className='justify-self-end'>{game.minimum_system_requirements.graphics}</div> 
                                                </div>
                                                )}
                                                {game.minimum_system_requirements.storage && (
                                                <div className='grid grid-cols-2 py-2 md:py-3'>
                                                    <div className='font-medium'>Storage:</div>
                                                    <div className='justify-self-end'>{game.minimum_system_requirements.storage}</div>
                                                </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex flex-col pt-4 gap-y-4 text-center'>
                                        <p className='text-lg md:font-semibold lg:text-2xl xl:text-2xl'>Want to learn more about {game.title}?</p>
                                        <div className='md:pt-3'>
                                            <button className="select-none rounded-lg bg-purple-600 py-3 px-6 text-center align-middle font-sans text-sm xl:text-lg font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            >
                                            <a href={game.game_url} target="_blank" rel="noopener noreferrer">Click Here</a>
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
    const { id } = params;
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

    try {
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey // Ensure this is set correctly
            }
        });
        
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching game data", error);
        throw error; // Optionally, rethrow the error to handle it in your component
    }
}

export { Gamepage as default, gameLoader }