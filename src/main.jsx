import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Speakers from './Components/Speaker/Speakers';
import AuthProvider from './Components/Provider/AuthProvider';
import Details from './Components/Details/Details';
import Contact from './Components/Contact';
import Private from './Components/Private';
import Private2 from './Components/Private2';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/element/:id',
        element:<Private><Details></Details></Private>,
        loader:() => fetch('/data.json')

      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/speaker',
        element: <Private2><Speakers></Speakers></Private2>
      
      } ,
      {
        path:'/contact',
        element: <Private2><Contact></Contact></Private2>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider><RouterProvider router={router} /></AuthProvider>
    
  
  </React.StrictMode>,
)
