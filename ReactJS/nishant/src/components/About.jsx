import React from "react";
import Signup from "./Signup";
import Props from "./Props";

function About() {
  let name = "jeetu";
  return (
    <div>
      <h1>About</h1>
      <Props name={name} />
      <Signup />
    </div>
  );
}

export default About;
