import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Homepages from "./pages/Homepages";
import Bokapages from "./pages/bokapages";
import Aboutpages from "./pages/aboutpages";



function App() {
  return (
    
    <>
      <header>


        <div className="img">
        <img className="logo" src="bildmassage.png.png" alt="en bild på en massage gubbe"/>
        <h1 className="name">Massageterapeut Jeanette Eriksson</h1>
        
        </div>


        <nav className="nav-links">
        <NavLink to="/">
          <h3>Hemsida</h3>
        </NavLink>

        <NavLink to="/about">
          <h3>Om mig</h3>
        </NavLink>

        <NavLink to="/boka">
          <h3>Boka/Priser</h3>
        </NavLink>
        
        </nav>
        
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/about" element={<Aboutpages />} />
          <Route path="/boka" element={<Bokapages />} />
        </Routes>
      </main>
    </>
  );
}

export default App;


