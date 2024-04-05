import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
       <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/about1">About</Link></li>
        <li><Link to="/usestate">usestate</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/home1">Home1</Link></li>
        <li><Link to="/login">Login</Link></li>
       </ul> 
        </>




    )
}

export default Navbar;
