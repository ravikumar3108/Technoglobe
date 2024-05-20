import React, { useEffect, useState } from "react";
import { porducts } from "./Data";

function Api() {
  //  arrow function ()=>{}

  // const Arowfun = () => {};

  // return <div>{porducts.map((item) => {
  //   return(
  //       <>
  //       {item.id} <br />
  //       {item.title} <br />
  //       {item.price} <br />
  //       <img src={item.imgae} alt="" />
  //       </>
  //   ) 
  // })}</div>;

  let [data,setData] = useState([])

  console.log(data)


  //  UseEffect : -  side effect of our components
   async function getData(){
    let api = await fetch("https://fakestoreapi.com/products")
    let apijson = await api.json()
    setData(apijson)
  }
  
  useEffect(()=>{
    getData()
  },[])


  return(
    <>
    
    

    </>
  )



}

export default Api;
