import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "react-use-cart";

function Api() {
  const [Api, setApi] = useState([]);
  console.log(Api);
  
  const {addItem} = useCart()

  async function handleApi() {
    let data = await fetch("https://fakestoreapi.com/products");
    let jsondata = await data.json();
    setApi(jsondata);
  }

  // useEffect :- Side effect of our component

  useEffect(() => {
    handleApi();
  }, []);

  // const handleAp = async()=>{

  // }

  const Api1 = [1, 2, 3, 4, 6, 7, 8, 9];

  function toastCart() {
    toast.success("Add to Cart");
  }

  return (
    <>
      <Toaster />
      <div
        className=""
        style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}
      >
        {Api.map((item) => {
          return (
            <>
              <div style={{ width: "22%" }}>
                <h1> {item.title}</h1>
                <p>{item.description}</p>
                <div key={item.id}>
                  <button onClick={() => addItem(item)}>Add to cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Api;
