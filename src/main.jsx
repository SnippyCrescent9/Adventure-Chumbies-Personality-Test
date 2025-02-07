import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AdventureChumbies from './pages/AdventureChumbies.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AdventureChumbiesProfile from './pages/AdventureChumbbiesProfile.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/adventureChumbies',
    element: <AdventureChumbies/>,
    children: [
      {
        path: '/adventureChumbies/:adventureChumbiesId',
        element: <AdventureChumbiesProfile/>
      }
    ]
  },
  // {
  //   path: '/adventureChumbies/:adventureChumbiesId',
  //   element: <AdventureChumbiesProfile/>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
