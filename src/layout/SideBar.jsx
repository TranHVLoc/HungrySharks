import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GiSharkJaws } from 'react-icons/gi'


import './SideBar.css'

const SideBar = () => {
  return (
    <div className='SideBar'>

      <nav>
        <div className='Header'>
          <Link to="/">
            <GiSharkJaws />
            <span>Hungry Sharks</span>
          </Link>
        </div>

        <div className='Menu'>
          <ul>
            <li className='menu-item'>
              <Link to="/">
                <span>🏠 Home</span>
              </Link>
            </li>

            <li className='menu-item'>
              <Link to="/create">
                <span>🎨 Create a Shark</span>
              </Link>
            </li>

            <li className='menu-item'>
              <Link to="/display">
                <span>🦈 Gallery</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />

    </div>
  )
}

export default SideBar