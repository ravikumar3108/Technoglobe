import React, { useEffect, useState } from "react";

function Api() {

    let [Api , setApi] = useState([])
    console.log(Api)

    //  UseEffect => Side effect of our components 
    useEffect(()=>{
        getData()
    })

    async function getData(){
        let data = await fetch("https://fakestoreapi.com/products",)
        let jsondata = await data.json()
        setApi(jsondata)
    }

  return (
    <div>
      {/* Default Api  */}
      {/* https://fakestoreapi.com/products */}

        {
            Api.map((item)=>{

            return(
                <>

                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                  
                
                </>
            )


            })
        }




    </div>
  );
}

export default Api;
