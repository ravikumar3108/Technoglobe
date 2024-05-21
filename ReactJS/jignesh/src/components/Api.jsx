import React, { useEffect, useState } from "react";
import { porducts } from "./Data";
import { useCart } from "react-use-cart";

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

  let [data, setData] = useState([]);

  console.log(data);

  const { addItem } = useCart();

  //  UseEffect : -  side effect of our components
  async function getData() {
    let api = await fetch("https://fakestoreapi.com/products");
    let apijson = await api.json();
    setData(apijson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main">
        {data.map((item) => {
          return (
            <>
              <div
                className="item"
                style={{
                  width: "33%",
                  border: "1px solid",
                  margin: "20px",
                  padding: "20px",
                }}
              >
                {item.id} <br />
                {item.title} <br />
                {item.price} <br />
                <img src={item.imgae} alt="" />
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
