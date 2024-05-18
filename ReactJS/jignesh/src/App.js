import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Api from "./components/Api";

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
          <Route path="/api" element={<Api/>}/>
        </Routes>
    </BrowserRouter>
    </>

  )
}

export default App