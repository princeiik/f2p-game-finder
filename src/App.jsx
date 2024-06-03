import React from 'react'
import { 
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Results from './pages/Results'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Homepage />} />
        <Route path='/results' element={<Results />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App