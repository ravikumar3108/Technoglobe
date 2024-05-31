import React, { useState } from "react";

function Hooks() {
  // Hooks allow function components to have access to state and other React features.
  //  Because of this, class components are generally no longer needed.
  // useState()
  // useEfffect()
  // useNavigate()
  // useParamas()

  //  Advanced
  // useContext
  // useMemo
  // useCallback

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState("nishant");

  function changeValue() {
    setValue(value + 1);
  }
  function changeValue1() {
    setValue1("Jeetu");
  }

  return (
    <div>
      <h1> {value}</h1>
      <h1>{value1}</h1>
      <button onClick={changeValue}>Plus +1 </button>
      <button onClick={changeValue1}>change the name </button>
    </div>
  );
}

export default Hooks;
