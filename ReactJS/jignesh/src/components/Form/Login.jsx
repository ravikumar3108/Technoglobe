import React, { useState } from "react";
import { json } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  //  USeState()

  let [intaialValue, setValue] = useState("Bhavesh");

  function changeName() {
    setValue("Jignesh");
  }

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

  function loginToast(){
    toast.success("Sucessful")
  }
  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem("Bhavesh", JSON.stringify(data));
    toast.success("Sucessful")
  }

  return (
    <>
      <Toaster />
      <div>
        {/* {intaialValue}
      <button onClick={changeName}>Name</button> */}

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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
