import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Main } from './Components/Layout/Main';
import { Order } from './Components/Order/Order';
import { Granda } from './Components/Granda/Granda';

const router = createBrowserRouter([

{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader:  () => fetch('tshirt.json')
    },
    {
      path:'review',
      element: <Order></Order>
    },
    {
      path:'granda',
      element: <Granda></Granda>
    }
  ]
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
