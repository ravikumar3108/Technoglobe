import React, { useState } from "react";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  console.log(name)

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
        {name} <br />
        {email} <br />
        {phone} <br />
      <form action="">
        <input type="text" name="" id="" placeholder="Name" onChange={onChnage}/> <br />
        <input type="email" name="" id="" placeholder="Email" onChange={onChnage1}/> <br />
        <input type="phone" name="" id="" placeholder="Phone" onChange={onChnage2} /> <br />
      </form>
    </div>
  );
}

export default Form;
