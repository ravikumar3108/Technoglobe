import React, { useState } from "react";
import logimg from "../Images/Work.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Loginp() {
  let [data, setData] = useState("");
  let nav = useNavigate();

  function getValue(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }


  function toastError(){
    toast.error("Something Wrong")
  }


  function handlelogin(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("Jeetu"));
    console.log(user.username);
    if (user.email === data.email && user.password === data.password) {
      toast.success("User is created")
      setTimeout(() => {
        nav("/");
      }, 3000);
    } else {
      toastError()
    }
  }

  return (
    <div>
      <Toaster />
      <div>
        <div id="login">
          <div className="main-div">
            <div className="container">
              <div className="left-container">
                <img src={logimg} alt="" />
              </div>
              <div className="right-container">
                <form action="#" id="myform" onSubmit={handlelogin}>
                  <h1>Welcome....</h1> <br />
                  <label htmlFor="email">Email Address</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
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
                    onChange={getValue}
                  />{" "}
                  <br /> <br />
                  <br />
                  <br />
                  <button type="submit">Login</button>
                  <p class="or">Or</p> <b></b>
                  <p>
                    <Link to="/signup">Create an account</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginp;
