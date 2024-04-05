import React, { useState } from "react";

function Usestatae1() {
  // UseState = Hooks
  // Intial Value :- By this we can get our state value
  // setValue :- Chnagement in our state by the function

  let [initialValue, setValue] = useState(0);
  let [initialValue1, setValue1] = useState("name");

  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let [allData, setData] = useState();
  console.log(allData);
  function Increment() {
    setValue(++initialValue);
  }

  function Increment1() {
    setValue1("name2");
  }

  // function getValue(){
  //   setName()
  // }

  // Arrow function
  const fun = (e) => {
    setData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };

  function sendData(e){
    e.preventDefault()
    let local = localStorage.setItem("User",JSON.stringify(allData))

  }


  return (
    <div>
      <h1> {initialValue}</h1>
      <button onClick={Increment}>Increment Number</button>
      <h1>{initialValue1}</h1>
      <button onClick={Increment1}>Change The Name</button>

      <h2>{name}</h2>

      <form action="" onSubmit={sendData}>
        <input type="text" name="usernmae" id="" onChange={fun} />
        <input type="text" name="email" id="" onChange={fun} />
        <input type="text" name="password" id="" onChange={fun} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Usestatae1;
