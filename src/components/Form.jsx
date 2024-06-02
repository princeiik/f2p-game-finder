import React from 'react'
// import { useState } from 'react'

function Form() {
    // const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState('')
    // const [platform, setPlatform] = useState('')


    return (
      <>
        <form>
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
        </form>
        <button className='mt-3 py-1 px-3 bg-indigo-300 rounded font-semibold hover:bg-sky-700'>
            Submit
        </button>
      </>
  )
}

export default Form