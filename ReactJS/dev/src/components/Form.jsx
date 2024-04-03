import React, { useState } from "react";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [data, setData] = useState("");
  // console.log(name)
  console.log(data);
  function getValue(e) {
    //  Spread opertaor ...

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function onChnage(e) {
    setName(e.target.value);
  }
  function onChnage1(e) {
    setEmail(e.target.value);
  }
  function onChnage2(e) {
    setPhone(e.target.value);
  }

  return (
    <div>
      <h1>{data.username}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phone}</h1>
      <form action="">
        <input
          type="text"
          name="username"
          id=""
          placeholder="Name"
          onChange={getValue}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={getValue}
        />{" "}
        <br />
        <input
          type="phone"
          name="phone"
          id=""
          placeholder="Phone"
          onChange={getValue}
        />{" "}
        <br />
      </form>
    </div>
  );
}

export default Form;
