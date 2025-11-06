import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bokapages.css";
import emailjs from "@emailjs/browser"; // 🆕

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
    const [email, setEmail] = useState(""); // 🆕 Lägg till email state
    const [confirmed, setConfirmed] = useState(false);
    const [loading, setLoading] = useState(false); // 🆕

    const handleConfirm = async () => { // 🆕 gör async för EmailJS
        if (!selectedDate) {
            alert("Välj först ett datum och tid innan du bekräftar!");
            return;
        }
        if (!email) {
            alert("Skriv in din e-postadress för bekräftelse!");
            return;
        }

        setLoading(true);

        try {
            // 🆕 Skicka bekräftelse via EmailJS
            await emailjs.send(
                "service_xxxxx",   // 🔹 byt ut med ditt EmailJS service ID
                "template_xxxxx",  // 🔹 byt ut med ditt template ID
                {
                    user_email: email,
                    booking_date: selectedDate.toLocaleString("sv-SE")
                },
                "public_xxxxx"     // 🔹 byt ut med din public key
            );

            setConfirmed(true);
            console.log("Bokning bekräftad:", selectedDate.toLocaleString());
        } catch (error) {
            console.error("Fel vid mejlutskick:", error);
            alert("Något gick fel när mejlet skulle skickas.");
        } finally {
            setLoading(false);
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

            {/* 🆕 Lägg till inputfält för e-post */}
            <input
                type="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
            />

            <button onClick={handleConfirm} className="confirm-btn" disabled={loading}>
                {loading ? "Skickar..." : "Bekräfta bokning"}
            </button>

            {confirmed && <p className="confirmed-msg">Bokning bekräftad! Ett mejl har skickats till {email}.</p>}
        </div>
        </>
    );
}

export default Bokapages;
