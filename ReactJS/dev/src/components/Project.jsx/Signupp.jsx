import React, { useState } from "react";
import { Link } from "react-router-dom";
import logimg from "../Images/Work.jpg";


function Signupp() {
  let [data, setData] = useState("");
  console.log(data);

  function getValue(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function getData(e) {
    e.preventDefault()
    localStorage.setItem("Jeetu", JSON.stringify(data));
    
  }

  return (
    <div>
      <div>
        <div id="signup">
          <div className="main-div">
            <div className="container">
              <div className="right-container">
                <form action="" id="myform" onSubmit={getData}>
                  <h1>Sign Up..</h1> <br />
                  <label htmlFor="username">Username</label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="UserName"
                    required
                    onChange={getValue}
                  />{" "}
                  <br />
                  <br />
                  <label htmlFor="email">Email Address</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={getValue}
                  />{" "}
                  <br />
                  <br />
                  <label htmlFor="pass">Password</label> <br />
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    minLength={4}
                    required
                    onChange={getValue}
                  />{" "}
                  <br /> <br />
                  <button type="submit">Login</button>
                  <p class="or">Or</p> <b></b>
                  <p>
                    Already have an account
                    <Link to="/login"> Sign In</Link>
                  </p>
                </form>
              </div>
              <div className="left-container">
                <img src={logimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signupp;
