import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [product, setProdutcs] = useState([]);

  async function handleSubmit(e) {
    await axios.get("http://localhost:8000/product/getproducts").then((res) => {
      console.log(res);
      setProdutcs(res.data.products);
    });
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  const deleteProduct = async (type) => {
    await axios
      .post(`http://localhost:8000/product/delete/${type}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div>
      {product.map((item) => {
        return (
          <>
            <div className="container">
              <div className="row col-12">
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <h1> {item.title}</h1>
                      <h1> {item._id}</h1>
                      <h1> {item.price}</h1>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteProduct(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Products;
