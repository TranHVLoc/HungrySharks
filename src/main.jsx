import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import SideBar from './layout/SideBar'

import './index.css'

// Gallery found from link below:
// https://wallpapercave.com/w/wp6426283

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='layout'>
        <SideBar />
        <div className='content'>
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
