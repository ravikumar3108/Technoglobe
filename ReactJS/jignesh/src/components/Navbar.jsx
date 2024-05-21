import React from 'react'
import { Link } from 'react-router-dom'
import image from "./images/djj1.jpg"

function Navbar() {
  return (
    <div style={{
      // color:"red",
      // backgroundColor:"blue"
    }}>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/api">Api</Link>
        </li>
        <li>
            <Link to="/cart">CArt</Link>
        </li>
      </ul>
     
    </div>
  )
}

export default Navbar
