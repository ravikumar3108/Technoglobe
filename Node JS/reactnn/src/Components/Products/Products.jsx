import React, { useState , useEffect } from 'react'
import { Products } from './ProductData'


function Product() {

  let [Data,setApi] = useState({});
  console.log(Data.products)
  let [Product,setProduct] = useState(Data.products)
  console.log("Products",Product)

  useEffect(() => {
    Api();
  },[]);
  // console.log(Data)
  // console.log(Product)



  let Api = async () => {
    let apidata = await fetch("https://dummyjson.com/products");
    let jsonapi = await apidata.json();
    setApi(jsonapi);
  };

 
  return (
    <div>
      {/* {
        Data.products.map((item)=>{
          return(
            <>
            {item.id}
            </>
          )
        })
      } */}

    
    </div>
  )
}

export default Product;
