import React , {useState} from 'react'


function UseState() {

let [intialValue , setValue] = useState(1)
let [intialValue1 , setValue1] = useState("dev")

console.log(intialValue)

function changeState(){
   setValue(intialValue * 3)
}



function changeState1(){
    setValue1("Ravi")
}
  return (
    <div>    
       <h1>{intialValue}</h1>
       <button onClick={changeState}>Plus + 1 </button>
       <h1>{intialValue1}</h1>
       <button onClick={changeState1}>Change Name</button>
    </div>
  )
}

export default UseState
