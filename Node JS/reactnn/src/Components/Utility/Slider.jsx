import React, { useEffect, useState } from "react";
import img1 from "../Images/banner-03.jpg";
import img2 from "../Images/home-new-bg-free-img.jpg";
import { Link } from "react-router-dom";

function Slider() {
  let Slider = [
    {
      id: 1,
      img: img1,
      heading: "Raining Offers For Hot Summer!",
      para: "25% Off On All Products",
      btn: "SHOP NOW",
      btn1: "FIND MORE",
    },
    {
      id: 2,
      img: img2,
      heading: "Raining Offers For Hot Summer!",
      para: "50% Off On All Products",
      btn: "SHOP NOW",
      btn1: "FIND MORE",
    },
    {
      id: 3,
      img: img1,
      heading: "Raining Offers For Hot Summer!",
      para: "75% Off On All Products",
      btn: "SHOP NOW",
      btn1: "FIND MORE",
    },
    {
      id: 4,
      img: img2,
      heading: "Raining Offers For Hot Summer!",
      para: "75% Off On All Products",
      btn: "SHOP NOW",
      btn1: "FIND MORE",
    },
  ];

  let [update, setUpdate] = useState(0);

  function Leftbtn() {
    if (update == 0) {
      setUpdate(3);
    }
    if (update > 0) {
      setUpdate(update - 1);
    }
  }
  // useEffect(()=>{
  //   Rgtbtn()
  // },[])
  //setInterval(() => {
  // Leftbtn()
  //   Rgtbtn()
  //}, 5000);

  function Rgtbtn() {
    if (update === 3) {
      setUpdate(0);
    }
    if (update < 3) {
      setUpdate(update + 1);
    }
  }

  return (
    <>
      <div className="slider">
        {Slider.map((item, i) => {
          return (
            <>
              <div
                className={`items ${i == update ? "active" : "d-none"}`}
                key={item.id}
              >
                <img src={item.img} alt="slider-image" width="100%" />
                <div className="content">
                  <h2>{item.heading}</h2>
                  <p>{item.para}</p>
                  <div className="btns d-flex">
                    <h3>
                      <Link className="nav-link text-white">{item.btn}</Link>
                    </h3>
                    <h3>
                      <Link className="nav-link text-white" >{item.btn1}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <button onClick={Leftbtn} className="slide-btn1">
          <i className="fa-solid fa-less-than"></i>
        </button>
        <button onClick={Rgtbtn} className="slide-btn2">
          <i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
