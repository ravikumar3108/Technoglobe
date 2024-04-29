import React, { useState } from "react";

function Login() {

  let [data, setData] = useState();
    // console.log(data)
    function getDtaa(e){
        setData({
            //  spreead operator 
            ...data,
            [e.target.name] : e.target.value
        })
    }


    function handleGet(e){
      e.preventDefault()
      let getUser = JSON.parse(localStorage.getItem("Users"))
      console.log(getUser)
      // if(){
      //   console.log("login")
      // }
      // else{
      //   alert("Something wrongg")
      // }
    }


    
  return (
    <div>
      <form action="" onSubmit={handleGet}>
        <input type="text" name="name" id="" placeholder="name"  onChange={getDtaa}/>
        <input type="text" name="email" id="" placeholder="email"  onChange={getDtaa}/>
        <input type="text" name="password" id="" placeholder="password"  onChange={getDtaa} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
