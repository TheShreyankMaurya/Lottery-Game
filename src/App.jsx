import { sum } from "./helper";
import Lottery from "./Lottery";
import "./style.css";

function App() {
    let winCondition = (ticket) => {
        // return ticket.every((num) => num === ticket[0]);
        return sum(ticket) === 15;
    };

    return (
        <div className="App">
            <Lottery n={3} winCondition={winCondition}></Lottery>
        </div>
    );
}

export default App;
