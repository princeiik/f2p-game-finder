import React from 'react'
// import { useState } from 'react'

function Form() {
    // const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState('')
    // const [platform, setPlatform] = useState('')


    return (
        <form>
            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <select
                  id="title"
                  name="title"
                  autoComplete="title-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
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
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
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
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            </div>
        </form>
        // <div>
        //     <form action="">
        //         <div>
        //             <label>Title:</label>
        //         </div>
        //         <div>
        //             <label>Genre:</label>
        //         </div>
        //         <div>
        //             <label>Platform:</label>
        //         </div>
        //         <div>
        //             <button>Search</button>
        //         </div>
        //     </form>
        // </div>
  )
}

export default Form