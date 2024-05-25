import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function More() {
  // const [productId] = useSearchParams();
  // let id = productId.get("id");
  // console.log(id);

  // let [data, setData] = useState("");

  // console.log(data);

  // //  UseEffect : -  side effect of our components
  // async function getData() {
  //   let api = await fetch(`https://fakestoreapi.com/products${id}`);
  //   let apijson = await api.json();
  //   setData(apijson);
  // }
  // useEffect(() => {
  //   getData();
  // },[]);


//  let {idd} = useParams()

// const data = products.find((item)=>item.id == idd)

  return (
    <div>
      <h1>More</h1>
    </div>
  );
}

export default More;
