import TicketNum from "./TicketNum";
import "./Ticket.css";

function Ticket({ ticket }) {
    return (
        <div className="Ticket">
            <span>Ticket</span>
            <div>
                {ticket.map((num, idx) => (
                    <TicketNum num={num} key={idx}></TicketNum>
                ))}
            </div>
        </div>
    );
}

export default Ticket;
