import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [genre, setGenre] = useState('')
    const [platform, setPlatform] = useState('')
    const navigate = useNavigate()

    function handleSumbit(e) {
      
      e.preventDefault();
      
      return navigate('/results', { state: { genre, platform }})
    }

    return (
      <>
        <div className='flex justify-center items-center max-h-full'>
          <form className='w-full flex flex-col space-y-2 w-full max-w-sm p-4' onSubmit={handleSumbit}>
            <div className="sm:col-span-3">
              <div className="sm:col-span-3">
                <label htmlFor="genre" className="block text-sm text-center font-medium leading-6 text-gray-900">
                  Genre
                </label>
                <div className="flex justify-center mt-2">
                  <select
                    id="genre"
                    name="genre"
                    autoComplete="genre-name"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={""}>Select a genre</option>
                    <option value={"mmorpg"}>MMORPG</option>
                    <option value={"shooter"}>Shooter</option>
                    <option value={"strategy"}>Strategy</option>
                    <option value={"moba"}>Moba</option>
                    <option value={"battle-royale"}>Battle Royal</option>
                    <option value={"survival"}>Survival</option>
                    <option value={"card"}>Card</option>
                    <option value={"racing"}>Racing</option>
                    <option value={"sports"}>Sports</option>
                    <option value={"social"}>Social</option>
                    <option value={"sci-fi"}>Sci-fi</option>
                    <option value={"fighting"}>Fighting</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="platform" className="block text-sm text-center font-medium leading-6 text-gray-900 mt-2">
                  Platform
                </label>
                <div className="flex justify-center mt-2">
                  <select
                    id="platform"
                    name="platform"
                    autoComplete="platform-name"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={""}>Select a platform</option>
                    <option value={"pc"}>PC</option>
                    <option value={"browser"}>Browser</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='pt-2 flex justify-center'>
              <Button />
            </div>
          </form>
        </div>
      </>
  )
}

export default Form