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
import Form from "./components/Form";
import Home1 from "./components/Somendar/Home";
import Login from "./components/Login";

function App() {
  return (
    // <></> JSX fragments :- this fragments allow to wriiten html code
    <>
      <BrowserRouter>

        <Navbar/>

        {/* <Home1></Home1> */}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about1" element={<About/>}/>
          <Route path="/usestate" element={<Usestatae1/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/home1" element={<Home1/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/form1" element={<Form/>}/>
          <Route path="/form2" element={<Form/>}/>
          <Route path="/form3" element={<Form/>}/>
          <Route path="/form4" element={<Form/>}/> */}
          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}


export default App;