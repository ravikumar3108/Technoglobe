import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function More() {
  const [productId] = useSearchParams();
  const id = productId.get("id");
  console.log(id);

  let [Api, setApi] = useState("");
  console.log(Api);
  //   Async Await
  async function handleApi() {
    let data = await fetch(`https://fakestoreapi.com/products${id}`);
    let jsonData = await data.json();
    console.log(jsonData);
    setApi(jsonData);
  }

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <div>
      <h1>More</h1>
      {Api.title}
    </div>
  );
}

export default More;
