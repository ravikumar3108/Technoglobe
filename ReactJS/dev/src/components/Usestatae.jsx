import React, { useState } from "react";

function Usestatae1() {
  // UseState = Hooks
  // Intial Value :- By this we can get our state value
  // setValue :- Chnagement in our state by the function

  let [intialValue, setValue] = useState(0);
  let [intialValue1, setValue1] = useState("Jeetu");
  let [intialValue2, setValue2] = useState(0);

  // Arrow function :-

  const Incre = () => {
    setValue(++intialValue);
  };

  function Incre1() {
    setValue("name");
  }

 
  return (
    <div>
      <h1>{intialValue}</h1>
      <button type="button" onClick={Incre}>
        Click Me
      </button>
      <h1>{intialValue1}</h1>
      <button
        type="button"
        onClick={() => {
          setValue1("Dhruv");
        }}
      >
        Click Me And Your Name is changed
      </button>
      <h1>{intialValue2}</h1>
      <button type="button" onClick={Incre}>
        Click Me
      </button>
    </div>
  );
}

export default Usestatae1;
