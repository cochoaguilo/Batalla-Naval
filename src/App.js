import Board from "./components/Board";
import Boats from "./components/Boats";
import Drag from "./components/Drag";
import NumbersDown from "./components/NumbersDown";
import NumbersLeft from "./components/NumbersLeft";
import NumbersRight from "./components/NumbersRight";
import Rules from "./components/Rules";
import "./style/app.css";

function App() {
  return (
    <div>
      <div className="game">
        <Rules />
        <div className="board">
          <NumbersLeft />
          <Board />
          <NumbersRight />
        </div>
        <div className="right-boats-options">
          <Boats />
          <Drag />
        </div>
      </div>
      <NumbersDown />
    </div>
  );
}

export default App;
