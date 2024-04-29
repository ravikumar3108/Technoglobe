import React, { useState } from "react";

function Signup() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let [allData, setAllData] = useState("");

  console.log(allData);

  function getValue(e) {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  function getData(e) {
    setName(e.target.value);
  }
  function getData1(e) {
    setEmail(e.target.value);
  }

  //   const getData3 = () => {};
  //    Arrow Function => () => {}

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem("Users",JSON.stringify(allData))
  }

  return (
    <div>
      <form action="" style={{ marginBottom: "100px" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Nmae"
          onChange={getValue}
        />
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          onChange={getValue}
        />
        <input
          type="text"
          name="password"
          id=""
          placeholder="Password"
          onChange={getValue}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
