import React, { useState } from "react";

function Signup() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

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
      <h1>Name : {name}</h1> <br />
      <h1>Email : {email}</h1> <br />
      <h1>Password : {password}</h1> <br />
      <form action="" style={{ marginBottom: "100px" }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Nmae"
          onChange={getData}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          onChange={getData1}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Signup;
