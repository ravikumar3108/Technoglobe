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

      {/* {Data.products.map((item)=>{
        return(
          <>
          <div className="container">
          <div className="row col-12">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                    {item.title}
                    {item.images}
                    {item.brand}
                    {item.price}
                </div>
              </div>
            </div>
          </div>
          </div>
          </>
        )
      })} */}
    </div>
  )
}

export default Product;
