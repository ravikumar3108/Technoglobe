import React, { useState } from "react";
import img1 from "./images/djj3.jpg";
import img2 from "./images/pexels-josh-sorenson-1714205.jpg";
import img3 from "./images/dj1.webp";

function Slider() {
  // 1. import imgaes
  // 2. Make an array
  // 3 .Apply map method to array

  const images = [
    {
      img: img1,
      text: "text1",
    },
    {
      img: img2,
      text: "text2",
    },
    {
      img: img3,
      text: "text3",
    },
  ];

  let [slide, setslide] = useState(0);

  function Rgtbtn() {
    if (slide <= 2) {
      setslide(++slide);
    }
    // if(slide < 2){
    //     setslide(slide+1)
    // }
    if (slide == 3) {
      setslide(0);
    }
  }

  function Leftbtn() {
    if (slide > 0) {
      setslide(slide - 1);
    }
    if (slide == 0) {
      setslide(2);
    }
  }

  return (
    <>
      <div className="slide" style={{ display: "flex" }}>
        {images.map((item, i) => {
          return (
            <>
              {/*  
          ternaery opertaor 
        condition   ? expression1 : expresssion2
          
          */}

              <div className={`slide ${i == slide ? "active" : "d-none"}`}>
                <img src={item.img} alt="" width="100%" />
              </div>
            </>
          );
        })}
      </div>
      <button onClick={Leftbtn}>left</button>
      <button onClick={Rgtbtn}>right</button>
    </>
  );
}

export default Slider;
