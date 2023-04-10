import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import ReadCards from './pages/ReadCards'
import EditCard from './pages/EditCard'
import CreateCard from './pages/CreateCard'
import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css'

function App() {

  const [sharks, setSharks] = useState({
    name: "",
    speed: "",
    type: "",
  })

  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/display",
      element: <ReadCards sharks={sharks} setSharks={setSharks} />
    },
    {
      path: "/edit/:id",
      element: <EditCard sharks={sharks} setSharks={setSharks} />
    },
    {
      path: "/create",
      element: <CreateCard sharks={sharks} setSharks={setSharks} />
    },
    {
      path: "/detail/:id",
      element: <Detail sharks={sharks} setSharks={setSharks} />
    }
  ])

  console.log("posts in APP", sharks)

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
