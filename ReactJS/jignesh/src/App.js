import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Api from "./components/Api";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  return (
    //  JSx Fragments 
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  )
}

export default App