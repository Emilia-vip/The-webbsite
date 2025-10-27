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

      <div>
        <button className="scroll-top" onClick={() => window.scrollTo({top:0,behavior: 'smooth'})}>↑</button>
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
        <p>
        Massage behandling 45min - 750kr
            <br />
        Massage behandling 60min - 950kr
            <br />
        Massage behandling 90min - 1300kr
        </p>
      </div>
    </>
  );
}

export default App;


