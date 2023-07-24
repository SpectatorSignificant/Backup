import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

