import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [password, setPass] = useState();
  console.log(email, name, password);

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios
      .post(
        "http://localhost:8080/app/user/register",
        { email, password, name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res);
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
                    onChange={(e) => setName(e.target.value)}
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
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary me-3">
                  Register
                </button>
                <Link to="/">Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
