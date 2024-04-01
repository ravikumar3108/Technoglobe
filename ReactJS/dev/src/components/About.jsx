import React from "react";
import Pro from "./Props";
import image from "./images/djj3.jpg"
import ProChild from "./ProChild";
import image2 from "./images/pexels-josh-sorenson-1714205.jpg"

function About() {

  let username = "Devender"

  return(
  <>
  <h2>My name is{username}</h2>
    <h1>About Componets</h1>
    <img src={image} alt="" width="100%" />



    <h1>Section 2 </h1>
    {/* 
    left side  = props name
    right side = data
    */}
    <h1></h1>
    <ProChild  image2 = {image2} name = {username}/>
  </>
  )
}

export default About;
