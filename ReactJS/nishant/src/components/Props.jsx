import React from 'react'
// import img

function Props(props) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h2>Name : {props.age}</h2>
      <img src={props.img} alt="" />
    </div>
  )
}

export default Props
