import React from "react";
import Props from "./Props";

function Cont() {
  let x = "Nishant";

  return (
    <div>
        {/*  Send a props */}
      <Props name={x} />
    </div>
  );
}

export default Cont;
