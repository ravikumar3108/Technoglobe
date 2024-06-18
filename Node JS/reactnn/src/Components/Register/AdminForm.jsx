import { all } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminForm() {
  const [allData, setData] = useState();
  const [image, setImage] = useState();
  console.log(image);
  console.log(allData);
  function getValue(e) {
    setData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("imageinform", image);
    await axios
      .post("http://localhost:8000/product/createproducts", {
        headers: {
          "Accept": "*/*",
        },
        image,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div>
      <div class="row">
        <div class="col-md-4 offset-md-3 m-auto">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <input
                  type="file"
                  name="image"
                  id=""
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={getValue}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    name="title"
                  />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    DesCription
                  </label>
                  <input
                    onChange={getValue}
                    type="text"
                    className="form-control"
                    name="des"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Rating
                  </label>
                  <input
                    onChange={getValue}
                    type="text"
                    className="form-control"
                    name="rating"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Price
                  </label>
                  <input
                    onChange={getValue}
                    type="text"
                    className="form-control"
                    name="price"
                  />
                </div>
                <button type="submit" className="btn btn-success me-3">
                  Login
                </button>
                <Link to="/register">Create Your Account </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;
