import React, { useEffect, useState } from "react";

function Api() {
  let [Api, setApi] = useState("");
    console.log(Api)
//   Async Await 
   async function handleApi(){
    let data = await fetch("https://fakestoreapi.com/products")
    let jsonData = await data.json()
    console.log(jsonData)
    setApi(jsonData)
    }

//  UseEffect = Side effect of our components 

    useEffect(()=>{
        handleApi()
    },[])

  return(
    <>
    
    </>
  )
}

export default Api;
