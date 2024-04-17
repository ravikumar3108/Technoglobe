import React from "react";
import Home from "./components/Home";
import "./App.css"
import Cart from "./components/Cart";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//  Create a function componenets
// export 
// import 
//  Call 


function App() {
  return (
    // Jsx fragments 

    // Path :- Routes path
    // elements: which elements shows in your path
    <>
        <BrowserRouter>
           <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Home/>}/>
          </Routes>
        
        </BrowserRouter>
    </>
  )
}


export default App;

