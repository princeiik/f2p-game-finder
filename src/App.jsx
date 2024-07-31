import React from 'react'
import { 
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Results from './pages/Results'
import Gamepage, { gameLoader } from './pages/Gamepage'

//Routes for pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Homepage />} />
      <Route path='/results' element={<Results />} />
      <Route path='/results/:id' element={<Gamepage />} loader={gameLoader} />
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App