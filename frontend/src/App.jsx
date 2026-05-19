import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './COMPONENTS/RootLayout.jsx'
import Home from './COMPONENTS/Home.jsx'
import AddUser from './COMPONENTS/AddUser.jsx'
import User from './COMPONENTS/User.jsx'
import UserList from './COMPONENTS/UserList.jsx'
function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"",
          element:<Home />
        },{
          path:"user",
          element:<User />
        },{
          path:"adduser",
          element:<AddUser />
        },{
          path:"userlist",
          element:<UserList />
        }
      ]
    }
  ])
  return <RouterProvider router={routerObj} />
}

export default App
