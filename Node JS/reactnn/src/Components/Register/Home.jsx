import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const handleSubmit = async (e) => {
    await axios
      .get("http://localhost:8000/getusers")
      .then((result) => {
        console.log(result);
        console.log(result.data.alluser1)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <h1>helooo</h1>
    </div>
  );
}

export default Home;
