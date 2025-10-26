
function App () {
    const handleClickboka = () => {
        alert('Du är nu bokad :)');
    }

function handleClickAbout() {
}

function handleClickInfo() {
}

    return (
        <div>
        <h1>Massageterapeut Jeantte Eriksson</h1>

        <button onClick={handleClickboka}>BOKA</button>
        <button onClick={handleClickAbout}>about me</button>
        <button onClick={handleClickInfo}>Behandlingar/priser</button>
        </div>
    );

}


export default App;




