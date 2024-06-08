import React, { useEffect, useState } from "react";

function Api() {
  const [Api, setApi] = useState([]);
  console.log(Api);
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

  return (
    <div>
      {Api.map((item) => {
        return (
          <>
            <div>
              <h1> {item.title}</h1>
              <p>{item.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Api;
