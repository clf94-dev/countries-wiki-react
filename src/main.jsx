import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
 createBrowserRouter,
 RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country'

import './index.css'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/country',
    element: <Country />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
