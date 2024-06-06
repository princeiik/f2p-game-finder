import React from 'react'
import { 
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Results from './pages/Results'
import Navbar from './components/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Homepage />} />
      <Route path='/results' element={<Results />} />
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App