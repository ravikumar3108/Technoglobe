import React from "react";
import { useState } from "react";

function LoginUser() {
  let [data, setData] = useState("");

  //   function getData(e) {
  //     setData(e.target.value);
  //   }

  console.log(data);

  function handleData(e) {
    setData({
      //  SPREAD OPERATOR
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("Bhavesh"));
    console.log(user);
  }

  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="name"
          onChange={handleData}
        />
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          onChange={handleData}
        />
        <input
          type="text"
          name="pass"
          id=""
          placeholder="password"
          onChange={handleData}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginUser;
