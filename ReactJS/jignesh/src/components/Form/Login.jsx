import React, { useState } from "react";

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

console.log(data)

  function handleData(e){
    setData({
        //  SPREAD OPERATOR
        ...data, 
        [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      {/* {intaialValue}
      <button onClick={changeName}>Name</button> */}
      
      <form action="">
        <input
          type="text"
          name="username"
          id=""
          onChange={handleData}
        />
        <input type="text" name="email" id="" placeholder="email"    onChange={handleData} />
        <input type="text" name="pass" id="" placeholder="password"   onChange={handleData} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
