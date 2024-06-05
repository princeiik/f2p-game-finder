import React, { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [genre, setGenre] = useState('')
    const [platform, setPlatform] = useState('')
    const navigate = useNavigate()

    function handleSumbit(e) {
      
      e.preventDefault();
      
      return navigate('/results')
    }

    return (
      <>
        <form onSubmit={handleSumbit}>
          <div className="sm:col-span-3">
            <div className="sm:col-span-3">
              <label htmlFor="genre" className="block text-sm font-medium leading-6 text-gray-900">
                Genre
              </label>
              <div className="mt-2">
                <select
                  id="genre"
                  name="genre"
                  autoComplete="genre-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>MMORPG</option>
                  <option>Shooter</option>
                  <option>Strategy</option>
                  <option>Moba</option>
                  <option>Battle Royal</option>
                  <option>Card</option>
                  <option>Racing</option>
                  <option>Sports</option>
                  <option>Social</option>
                  <option>Fighting</option>
                  <option>Sci-fi</option>
                  <option>Social</option>
                  <option>Fighting</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="platform" className="block text-sm font-medium leading-6 text-gray-900">
                Platform
              </label>
              <div className="mt-2">
                <select
                  id="platform"
                  name="platform"
                  autoComplete="platform-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>PC</option>
                  <option>Browser</option>
                </select>
              </div>
            </div>
          </div>
          <button type='submit'>
            <Button />
          </button>
        </form>
      </>
  )
}

export default Form