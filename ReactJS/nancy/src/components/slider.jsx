import React, { useState } from "react";
import img1 from "./images/djj.jpg";
import img2 from "./images/djj1.jpg";
import img3 from "./images/djj2.jpg";
import img4 from "./images/djj3.jpg";

function Slider() {
  let data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];

  let [slider, setSlider] = useState(0);
  //   {"hihihihi {item.id} "}
  //   {`hiii ${item.id}`}

  function leftBtn(){
    if(slider > 0){
        setSlider(slider - 1)
    }
    if(slider == 0){
        setSlider(3)
    }
  }

  function rgtBtn(){
    if(slider < 3){
        setSlider(slider + 1)
    }
    if(slider == 3){
        setSlider(0)
    }
  }

  return (
    <div className="slider" style={{ display: "flex" }}>
      {data.map((item, i) => {
        return (
          <>
            <div className={`img ${i == slider ? "active" : "d-none"}`}>
              <img src={item.image} alt="" width={"100%"} />
            </div>
          </>
        );
      })}
      <button onClick={leftBtn}>left</button>
      <button onClick={rgtBtn}>right</button>
    </div>
  );
}

export default Slider;
