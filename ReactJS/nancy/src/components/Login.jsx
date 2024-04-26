import React, { useState } from "react";

function Login() {

  let [data, setData] = useState();

    console.log(data)

    function getDtaa(e){
        setData({
            //  spreead operator 
            ...data,
            [e.target.name] : e.target.value
        })
    }
    
  return (
    <div>
      <form action="">
        <input type="text" name="name" id="" placeholder="name"  onChange={getDtaa}/>
        <input type="text" name="email" id="" placeholder="email"  onChange={getDtaa}/>
        <input type="text" name="password" id="" placeholder="password"  onChange={getDtaa} />
      </form>
    </div>
  );
}

export default Login;
