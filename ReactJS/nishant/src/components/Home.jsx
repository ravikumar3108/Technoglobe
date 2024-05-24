import React from "react";
import img1 from "./Images/djj3.jpg"

function Home() {

  let name1 = "Nishant KUmar"

  return (
    <>
      <h1>{name1}</h1>
      <p style={{
          color:"red",
          paddingBottom:"20px",
          backgroundColor:""
      }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        molestias ipsam, quidem necessitatibus dolores minus optio adipisci!
        Dolor similique maiores, qui laboriosam eveniet incidunt cupiditate eos
        perspiciatis nostrum est maxime?
      </p>

      <img src={img1} alt="" width="100%" />

    </>
  );
}

export default Home;
