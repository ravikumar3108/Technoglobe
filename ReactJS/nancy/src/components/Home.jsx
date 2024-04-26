import React from "react";
import Navbar from "./Navbar";
import Childcompo from "./Childcompo";
import image from "./images/djj.jpg";
import UseState from "./Hooks/UseState";
import Signup from "./Signup";
import Login from "./Login";

function Home() {
  let name = "dev";
  let age = 22;
  let rollno = 43;

  return (
    <>
      <h1>HOme COmponent {name} </h1>
      <UseState/>
      <Signup/>
      <Login/>
      {/*  Send props to child component */}
      {/* <Childcompo name1={name} age={age} rollno={rollno} img = {image}/> */}
    </>
  );
}

export default Home;
