import React from 'react'
import PropsComp from './PropsComp'
import image2 from "../images/djj3.jpg"

function Home1() {

    const username = "Somendar"
    let age = 67
    let rollno = 26

  return (
    <div>
      <h1>Helooo</h1>
      <PropsComp username={username} age1 = {age} img={image2} />
    </div>
  )
}

export default Home1
