import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <>
       <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/about1">About</Link></li>
        <li><Link to="/usestate">usestate</Link></li>
       </ul> 
        </>
    )
}

export default Navbar;
