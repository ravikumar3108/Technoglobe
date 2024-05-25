import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Api() {
  let [Api, setApi] = useState([]);
  let [filterApi, setFilterApi] = useState([]);


  //   Async Await
  async function handleApi() {
    let data = await fetch("https://fakestoreapi.com/products");
    let jsonData = await data.json();
    console.log(jsonData);
    setApi(jsonData);
    setFilterApi(jsonData);
  }

  function filter(type) {
    let filterData = Api.filter((data) => data.category == type);
    console.log(filterData);
    setFilterApi(filterData)
  }

  //  UseEffect = Side effect of our components

  useEffect(() => {
    handleApi();
  }, []);

  const { addItem } = useCart();

  return (
    <>
      <button onClick={()=>{
        setFilterApi(Api)
      }}>All</button>
      <button
        onClick={() => {
          filter("electronics");
        }}
      >
        Electronics
      </button>
      <button>Jewellery</button>
      <button>Mens</button>
      <button>womens</button>
      {filterApi.map((item) => {
        return (
          <>
            <div
              className="div"
              style={{
                border: "1px solid black",
                width: "30%",
                height: "300px",
              }}
            >
              <h1> {item.title}</h1>
              <div key={item.id}>
                <button onClick={() => addItem(item)}>Add to cart</button>
              </div>
              <button><Link to={`/moredetails?id=/${item.id}`}>More Details</Link></button>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Api;
