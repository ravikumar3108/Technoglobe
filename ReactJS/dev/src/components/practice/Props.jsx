// Props :- Props stands for Properties
// Props are used to send data one component to other componnet

import React from "react";
import ProChild from "./ProChild";

function Pro(props) {
  return (
    <>
    {/* props.propsname */}

    

      <h2>Heloo This is Prop Components</h2>
      <img src={props.img} alt="" width="100%" height={"300px"}/>
      <h6>{props.name}</h6>
      <h2>My name is {props.name} . My age is {props.age}</h2>
      <h2>{props.age}</h2>

      <ProChild name1 = {props.name}/>
    </>
  );
}

export default Pro
