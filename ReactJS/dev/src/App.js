// Function Components 
//  Create a function Components
// Export the Component
// Call the function Component

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homep from "./components/Project.jsx/Homep";
import Products from "./components/Project.jsx/Products";
import Loginp from "./components/Project.jsx/Loginp";
import Signupp from "./components/Project.jsx/Signupp";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Project.jsx/Cart";

function App() {
  return (
    // <></> JSX fragments :- this fragments allow to wriiten html code
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homep />} />
            <Route path="/product" element={<Products />} />
            <Route path="/login" element={<Loginp />} />
            <Route path="/signup" element={<Signupp />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}


export default App;