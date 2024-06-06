import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  //  Single State Data
  const [data, setData] = useState("");
  // const [data, setData] = useState("");
  // const [data, setData] = useState("");
  // console.log(data);

  function getData(e) {
    setData(e.target.value);
  }

  //  Multiple State Data

  const [allData, setAllData] = useState("");
  console.log(allData);

  let nav = useNavigate()

  function getData1(e) {
    setAllData({
      // Spread operator
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("Submit");
  //   localStorage.setItem("nishant", JSON.stringify(allData));
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit");
    const user = JSON.parse(localStorage.getItem("nishant"));
    console.log(user);
    if (
      allData.username === user.username &&
      allData.password == user.password
    ) {
     nav("/home")
    } else {
      alert("Something wrong");
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label htmlFor="">UserName</label>
        <input type="text" name="username" id="" onChange={getData1} />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" onChange={getData1} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" id="" onChange={getData1} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
