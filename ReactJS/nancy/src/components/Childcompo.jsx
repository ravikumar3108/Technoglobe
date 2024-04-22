import React from "react";

function Childcompo(props) {
//   console.log(props);

  return (
    <div>
      <h1>Child Component</h1>
      <h3>Name : - {props.name1}</h3>
      <h3>Age : -{props.age} </h3>
      <h3>Roolno : -{props.rollno} </h3>
      <h3>Name : - {props.name1}</h3>
      <img src={props.img} alt="" width="100%"/>
    </div>
  );
}

export default Childcompo;
