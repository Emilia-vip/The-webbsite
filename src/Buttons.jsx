import React, { useRef,useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const bokaRef = useRef(null);
  const omMigRef = useRef(null);
  const priserRef = useRef(null);

  
  const scrollToBoka = () => {
    bokaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOmMig = () => {
    omMigRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPriser = () => {
    priserRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      
      <div id="container">
        <img src="/bild.png" alt="Bild på en gubbe" />

        <h1>Massageterapeut Jeanette Eriksson</h1>

        <button onClick={scrollToBoka}>BOKA</button>
        <button onClick={scrollToOmMig}>About Me</button>
        <button onClick={scrollToPriser}>Behandlingar/Priser</button>
      </div>

    

      <div ref={bokaRef} id="boka" className="section">
        <h2>Boka</h2>
        <p>Här kan du boka en tid!</p>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <p>valt datum: {selectedDate.toDateString()}</p>
      </div>

     
      <div ref={omMigRef} id="OmMig" className="section">
        <h2>Om mig</h2>
        <p>Jag heter Jeanette Eriksson och är certifierad massageterapeut.</p>
      </div>

     
      <div ref={priserRef} id="Priser" className="section">
        <h2>Behandlingar & Priser</h2>
        <p>Här kommer dina behandlingar och priser att visas.</p>
      </div>
    </>
  );
}

export default App;


