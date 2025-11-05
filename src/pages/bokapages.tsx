import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bokapages.css";


const Information = () => {
    return (
        <div>
            <h3>Priser och information</h3>
            <p>En behandling -750kr</p>
            <p>Alla behandlingar är 45 minuter långa. Du kan avboka eller ändra din tid senast 24 timmar innan bokad tid. Vid sen avbokning eller utebliven tid debiteras fullpris.</p>

        </div>
    )
}

function Bokapages() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirm = () => {
        if (selectedDate) {
            setConfirmed(true);
            console.log("Bokning bekräftad:", selectedDate.toLocaleString());
        } else {
            alert("Välj först ett datum och tid innan du bekräftar!");
        }
    };

    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const filterTime = (time: Date) => {
        const hour = time.getHours();
        return hour >= 13 && hour <= 17;
    };

    return (
        <>



        <div className="booking-container">
        <div className="info"></div>
             <Information />
            <p>Boka mig!</p>

            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                    setConfirmed(false);
                }}
                showTimeSelect
                timeIntervals={30}
                minDate={new Date()}
                filterDate={isWeekday}
                filterTime={filterTime}
                dateFormat="yyyy-MM-dd h:mm aa"
                placeholderText="Välj datum och tid"
            />

            {selectedDate && (
                <p>
                    Du har valt:{" "}
                    {selectedDate.toLocaleDateString()}{" "}
                    {selectedDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
            )}



            <button onClick={handleConfirm} className="confirm-btn">
                Bekräfta bokning
            </button>

            {confirmed && <p className="confirmed-msg">Bokning bekräftad!</p>}
           
        </div>
        </>
    );
}

export default Bokapages;
