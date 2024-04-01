// Function Components 
//  Create a function Components
// Export the Component
// Call the function Component

import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
// import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Usestatae1 from "./components/Usestatae";

function App() {
  return (
    // <></> JSX fragments :- this fragments allow to wriiten html code
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about1" element={<About/>}/>
          <Route path="/usestate" element={<Usestatae1/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App;