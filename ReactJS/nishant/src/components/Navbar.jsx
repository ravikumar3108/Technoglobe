import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
       <li><Link to="/home" >Home</Link></li>
       <li><Link to="/" >About</Link></li>
       <li><Link to="/contact" >Contact</Link></li>
       <li><Link to="/api" >Api</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
