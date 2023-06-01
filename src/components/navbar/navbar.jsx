import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"
import { Link } from 'react-router-dom'



function Navbar() {

  return (
    <div className='navbar'>
      <div className="navContainer">
      <Link className="logo" to="/">
      <span
        >
Deltox</span>
      </Link>


        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
