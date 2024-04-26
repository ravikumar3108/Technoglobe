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

  //

  return (
    <div>
      <h1>Signup Form</h1>
      <h1>Name : {allData.name}</h1> <br />
      <h1>Email : {email}</h1> <br />
      <h1>Password : {password}</h1> <br />
      <form action="" style={{ marginBottom: "100px" }}>
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
