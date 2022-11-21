// import Game from "../../Pages/Game";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { firstPlayer } from "../../redux/plaeyrSlice";
import { selectedStartIcon } from "../../redux/selectors";
import { OIcon, XIcon } from "../Icons/Icon.styled";
// import { NavLink } from "react-router-dom";

interface SquareProp {
  value: JSX.Element | string | null;
  onClick(): void;
}
export const Board: React.FC = () => {
  // const [newGame, setNewGame] = useState<boolean>(false);
  const [squares, setSqaures] = useState<Array<any>>(Array(9).fill(null));

  // const dispatch = useDispatch();
  const startIcon = useSelector(selectedStartIcon);
  console.log("startIcon :>> ", startIcon);
  const [isX, setIsX] = useState<boolean>(startIcon);
  let winner = calculateWinner(squares);

  function Square({ value, onClick }: SquareProp) {
    return (
      <button
        className="square"
        onClick={onClick}
        disabled={winner ? true : false}
      >
        {value}
      </button>
    );
  }

  function value(i: number) {
    let value;
    if (squares[i] === "X") {
      value = <XIcon />;
    } else if (squares[i] === "O") {
      value = <OIcon />;
    } else {
      value = null;
    }

    return value;
  }

  function calculateWinner(squares: Array<any>) {
    // Total 8 winning patterens
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handlePlayer(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSqaures(squares);
    setIsX(!isX);
  }

  // function handleNewGame() {
  //   dispatch(firstPlayer(!isX));
  //   setSqaures(Array(9).fill(null));
  //   setNewGame(true);
  // }

  // function handleRestartGame() {
  //   dispatch(firstPlayer(!isX));
  //   setSqaures(Array(9).fill(null));
  // }
  const renderSquare = (i: number) => {
    return <Square value={value(i)} onClick={() => handlePlayer(i)} />;
  };

  return (
    <div>
      <div className="board">
        <div className=" w-[300px] md:[w-400px] rounded-lg flex items-center justify-center space-x-10">
          <div>
            {isX ? (
              <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium uppercase">
                <span className="text-[#30c4bd] text-2xl font-bold">X</span>{" "}
                Turn
              </div>
            ) : (
              <div className="text-white bg-gray-700 text-xl px-4 py-1 w-28 rounded-lg font-medium  uppercase">
                <span className=" text-[#f3b236] text-2xl  font-bold">O</span>{" "}
                Turn
              </div>
            )}
          </div>
          <button
            // onClick={handleRestartGame}
            className="group button px-2 py-1 hover:ring-4 hover:ring-cyan-300 rounded-md bg-[#f3b236] hover:bg-[#30c4bd]"
          ></button>
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};
