import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  let [email, setData] = useState();
  let [password, setPass] = useState();

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/users/login", { email, password })
        .then((res) => {
          console.log(res.data.login);
          console.log(res);
        }).catch((err)=>{
          console.log(err)
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="login" style={{ width: "100%", height: "90vh" }}>
      <Toaster />
      <div class="row">
        <div class="col-md-4 offset-md-3 m-auto">
          <div class="card">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setData(e.target.value)}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                  />
                  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    className="form-control"
                    id="password"
                    name="password"
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
};
export default Login;
