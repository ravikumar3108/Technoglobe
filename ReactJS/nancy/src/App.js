import React from "react";
import Home from "./components/Home";
import "./App.css"
import Cart from "./components/Cart";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Users from "./components/Users";
import { CartProvider } from "react-use-cart";
import Api from "./components/Api";
import More from "./components/More";
import Slider from "./components/slider";

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
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<Api />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />} />
            <Route path="/moredetails" element={<More />} />
            <Route path="/slider" element={<Slider />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}


export default App;

