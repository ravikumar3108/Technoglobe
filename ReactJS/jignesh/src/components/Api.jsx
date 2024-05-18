import React from "react";
import { porducts } from "./Data";

function Api() {
  //  arrow function ()=>{}

  const Arowfun = () => {};

  return <div>{porducts.map((item) => {
    return(
        <>
        {item.id} <br />
        {item.title} <br />
        {item.price} <br />
        <img src={item.imgae} alt="" />
        </>
    ) 
  })}</div>;
}

export default Api;
