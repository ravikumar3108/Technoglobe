import React, { useEffect, useState } from 'react'

function Api() {

    const [Api,setApi] = useState("")
    console.log(Api)
   async function handleApi(){
        let data = await fetch("https://fakestoreapi.com/products")
        let jsondata = await data.json()
        console.log(jsondata)
        setApi(jsondata)
    }

    
    // useEffect :- Side effect of our component 

useEffect(()=>{
    handleApi()
},[])

    // const handleAp = async()=>{
        
    // }

  return (
    <div>
      
    </div>
  )
}

export default Api
