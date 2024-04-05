import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [allData, setData] = useState("");

//   UseNavigate = route one page to another page
    let nav = useNavigate()

  const fun = (e) => {
    setData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };

  function sendData(e) {
    console.log("function is run ")
    e.preventDefault();
    let local = JSON.parse(localStorage.getItem("User"))
    console.log(local.usernmae)
    console.log(local.email)
  }

  function navigate(){
    nav("/")
  }


  return (
    <div>
      <form action="" onSubmit={sendData}>
        <input type="text" name="usernmae" id="" onChange={fun} />
        <input type="text" name="email" id="" onChange={fun} />
        <input type="text" name="password" id="" onChange={fun} />
        <button type="submit">Submit</button>
      </form>


    <button onClick={navigate}>Navigate</button>

    </div>


    


  );
}

export default Login;
