import { useState } from "react";

function Lottery() {
    let [ticket, setTicket] = useState("");
    let [win, setWin] = useState(false);

    function updateTicket() {
        let newTicket = String(Math.floor(Math.random() * 1000)).padStart(
            3,
            "0",
        );

        let sum = 0;
        for (const num of newTicket) {
            sum += parseInt(num);
        }

        setTicket(newTicket);
        setWin(sum === 15);
    }

    return (
        <div>
            <h1>Lottery Game</h1>

            {win && <h2>Congratulations!! You Won!!</h2>}

            <h3>Lottery Ticket = {ticket}</h3>

            <button onClick={updateTicket}>Get New Ticket</button>
        </div>
    );
}

export default Lottery;
