import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  let [allData, setData] = useState("");
  console.log(allData);

  function getValue(e) {
    setData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/signup", allData).then((res) => {
      console.log(res);
    });
  }
  return (
    <div id="register">
      <Toaster />
      <div class="row">
        <div class="col-md-4 offset-md-3 m-auto">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    onChange={getValue}
                    className="form-control"
                    id="user"
                    aria-describedby="emailHelp"
                    name="user"
                  />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={getValue}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={getValue}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary me-3">
                  Register
                </button>
                <Link to="/login">Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
