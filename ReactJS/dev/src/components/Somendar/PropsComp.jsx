import React from 'react'

function PropsComp(props) {
  return (
    <div>
        <p>Props Component</p>
        <h2>Name : {props.username} </h2>
        <h2>Age : {props.age1} </h2>
        <h2>Name : {props.username} </h2>
        <img src={props.img} alt="" width={"100%"} />
    </div>
  )
}

export default PropsComp
