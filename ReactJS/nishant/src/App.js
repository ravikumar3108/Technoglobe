//  Create a function component 
// export our components
// import our function components
// Call the function component 

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Conatct from "./components/Conatct"
import "./App.css"
import Cont from "./components/Cont"
import Api from "./components/Api"
import { CartProvider } from "react-use-cart"
import Cart from "./components/Cart"


function App() {
  return (
    //  JSX fragemnts ;- 
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Conatct />} />
            <Route path="/" element={<About />} />
            <Route path="/cont" element={<Cont />} />
            <Route path="/api" element={<Api />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App





