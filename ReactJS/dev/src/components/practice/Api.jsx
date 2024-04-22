import React, { useEffect, useState } from "react";
import loaderimg from "../Images/200w.gif"
function Api() {
  let [Api, setApi] = useState([]);
  console.log(Api);

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
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
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
