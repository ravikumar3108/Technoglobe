import React from 'react'

function ProChild(props) {
  return (
    <div>
      <h3>Props {props.name}</h3>
      <img src={props.image2} alt="" width="100%" />
    </div>
  )
}

export default ProChild
