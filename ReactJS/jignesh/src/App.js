import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    //  JSx Fragments 
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    </>

  )
}

export default App