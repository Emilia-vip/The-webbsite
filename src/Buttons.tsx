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
        <NavLink to="/">
          <h3>Hemsida</h3>
        </NavLink>

        <NavLink to="/about">
          <h3>Om mig</h3>
        </NavLink>

        <NavLink to="/boka">
          <h3>Boka/Priser</h3>
        </NavLink>
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


