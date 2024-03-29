import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
 createBrowserRouter,
 RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country'

import NotFoundPage from './pages/NotFound'
import './i18n';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/country',
    element: <Country />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: '/not-found',
    element: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
