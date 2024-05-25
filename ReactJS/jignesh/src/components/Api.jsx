import React, { useEffect, useState } from "react";
import { porducts } from "./Data";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

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
  const [filterD , setFilter] = useState([])

  console.log(data);

  const { addItem } = useCart();

  //  UseEffect : -  side effect of our components
  async function getData() {
    let api = await fetch("https://fakestoreapi.com/products");
    let apijson = await api.json();
    setData(apijson);
    setFilter(apijson)
  }

  useEffect(() => {
    getData();
  }, []);

  function FilterItems(type){
    console.log("finc")
    let filterData = data.filter((data)=>data.category == type) 
    console.log(filterData)
    setFilter(filterData)
  }

  function All(){
    setFilter(data)
  }


  return (
    <>
      <div className="main">
        <button>All</button>
        <button onClick={()=>{FilterItems("women's clothing")}}>Womens</button>
        <button>Mens</button>
        <button>Electronics</button>
        {filterD.map((item) => {
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
                <button><Link to={`/more?id=/${item.id}`}>More details</Link></button>
                {/* <button><Link to={`/more/${item.id}`}>More details</Link></button> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Api;
