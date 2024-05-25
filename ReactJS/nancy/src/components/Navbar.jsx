import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">CArt</Link></li>
        <li><Link to="/api">Api</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sigup</Link></li>
        <li><Link to="/slider">slider</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
