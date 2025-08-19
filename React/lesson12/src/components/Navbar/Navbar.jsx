import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
       <div className="logobox">
        <NavLink  to="/">Logo</NavLink>
       </div>
       <ul className="list">
        <li className="item">
         <NavLink to="/">Home</NavLink>
        </li>
        <li className="item">
         <NavLink to="/about">About</NavLink>
        </li>
        <li className="item">
         <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="item">
         <NavLink to="/terms">Terms</NavLink>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar
