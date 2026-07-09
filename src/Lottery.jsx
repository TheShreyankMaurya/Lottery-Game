import { useState } from "react";
import { genArr, sum } from "./helper";

function Lottery() {
    let [ticket, setTicket] = useState(genArr(3));
    let isWin = sum(ticket) === 15;

    return (
        <div>
            <h1>Lottery Game</h1>

            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWin && "Congratulations, You Won!"}</h3>
            <button>Get New Ticket</button>
        </div>
    );
}

export default Lottery;
