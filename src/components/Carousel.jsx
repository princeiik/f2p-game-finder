import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Carousel() {
    const game = useLoaderData()  

    return (
        <div className='px-4 py-4'>
            <div className='grid grid-cols-3 grid-rows-3'>
                {/* Image 1 */}
                <div className='col-span-2 bg-red-500'>
                    <img className='p-4' src={game.screenshots[0].image} alt="" />
                </div>
                <div className='bg-orange-500'>2</div>
                <div className='bg-yellow-500'>3</div>
                {/* Image 2 */}
                <div className='col-span-2 bg-green-500'>
                    <img className='p-4' src={game.screenshots[1].image} alt="" />
                </div>
                {/* Image 3 */}
                <div className='col-span-2 bg-blue-500'>
                    <img className='p-4' src={game.screenshots[2].image} alt="" />
                </div>
                <div className='bg-purple-500'>6</div>
            </div>
        </div>

    )
}

export default Carousel