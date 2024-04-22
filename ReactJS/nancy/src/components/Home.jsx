import React from "react";
import Navbar from "./Navbar";
import Childcompo from "./Childcompo";
import image from "./images/djj.jpg";

function Home() {
  let name = "dev";
  let age = 22;
  let rollno = 43;

  return (
    <>
      <h1>HOme COmponent {name} </h1>
      {/*  Send props to child component */}
      <Childcompo name1={name} age={age} rollno={rollno} img = {image}/>
    </>
  );
}

export default Home;
