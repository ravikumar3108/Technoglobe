import React, { useEffect, useState } from "react";
import loaderimg from "../Images/200w.gif";
import { useCart } from "react-use-cart";
function Api() {
  let [Api, setApi] = useState([]);
  console.log(Api);

  const {addItem} = useCart()
  //  UseEffect => Side effect of our components
  useEffect(() => {
    getData();
  });

  async function getData() {
    let data = await fetch("https://fakestoreapi.com/products");
    let jsondata = await data.json();
    setApi(jsondata);
  }

  return (
    <div>
      {/* Default Api  */}
      {/* https://fakestoreapi.com/products */}

      {Api.length > 0 ? (
        Api.map((item) => {
          return (
            <>
              <h1>{item.id}</h1>
              <div style={{width:"10%"}}>
              <img src={item.image} alt="" width="100%" />
              </div>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <div key={item.id}>
                <button onClick={() => {addItem(item)}}>Add to cart</button>
              </div>
            </>
          );
        })
      ) : (
        <img src={loaderimg} alt="" width="100%" height="200px" />
      )}
    </div>
  );
}

export default Api;
