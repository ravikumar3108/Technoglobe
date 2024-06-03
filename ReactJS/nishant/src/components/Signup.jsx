import React, { useState } from "react";

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

  function getData1(e) {
    setAllData({
      // Spread operator 
      ...allData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form action="">
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
