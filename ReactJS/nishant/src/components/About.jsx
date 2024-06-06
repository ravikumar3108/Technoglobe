import React from "react";
import Signup from "./Signup";
import Props from "./Props";
import { useNavigate } from "react-router-dom";
import img from "./Images/djj.jpg"

function About() {
  let name = "jeetu";

  //  useNavigate :- this is used to navigate one component to another component

  let navi = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <Props name={name}  age ={12} img={img} />
      <Signup name={name} />
      <button onClick={()=>{navi("/contact")}}>Click Me</button>
    </div>
  );
}

export default About;
