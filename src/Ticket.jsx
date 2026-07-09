import TicketNum from "./TicketNum";

function Ticket({ ticket }) {
    return (
        <div>
            <h4>Ticket</h4>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}></TicketNum>
            ))}
        </div>
    );
}

export default Ticket;
