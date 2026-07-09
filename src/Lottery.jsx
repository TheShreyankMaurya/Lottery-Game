import { useState } from "react";
import { genArr, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({ n, winCondition }) {
    let [ticket, setTicket] = useState(genArr(n));
    let isWin = winCondition(ticket);

    function buyTicket() {
        setTicket(genArr(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>

            <Ticket ticket={ticket}></Ticket>

            <h3>{isWin && "Congratulations, You Won!"}</h3>

            <button onClick={buyTicket}>Get New Ticket</button>
        </div>
    );
}

export default Lottery;
