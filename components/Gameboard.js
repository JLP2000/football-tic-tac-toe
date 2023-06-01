import styles from "../styles/Gameboard.module.css";
import { useState, useEffect } from "react";

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Gameboard = () => {
  const [modalTitle, setModalTitle] = useState("");
  const [won, setWon] = useState(false);
  const [wonCombo, setWonCombo] = useState([]);
  const [isDraw, setIsDraw] = useState(false);
  const [xTurn, setXTurn] = useState(true);
  const [boardData, setBoardData] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });

  useEffect(() => {
    checkWinner();
    checkDraw();
  }, [boardData]);

  const updateBoardData = (idx) => {
    if (!boardData[idx]) {
      let value = xTurn === true ? "X" : "O";
      setBoardData({ ...boardData, [idx]: value });
      setXTurn(!xTurn);
    }
  };

  const checkWinner = () => {
    WINNING_COMBO.map((bd) => {
      const [a, b, c] = bd;
      // check if symbols are all the same i.e X/O
      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] == boardData[c]
      ) {
        setWon(true);
        setWonCombo([a, b, c]);
        setModalTitle(`Player ${!xTurn ? "X" : "O"} Won!!`);

        return;
      }
    });
  };

  const checkDraw = () => {
    // .keys returns an array of a given object's own string-keyed property names
    let check = Object.keys(boardData).every((i) => boardData[i]); // check if every box has been clicked
    setIsDraw(check);
    if (check) setModalTitle("We have a Tie!");
  };

  const reset = () => {
    setBoardData({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    });
    setXTurn(true);
    setWon(false);
    setWonCombo([]);
    setIsDraw(false);
    setModalTitle("");
  };

  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
        <div className={styles.game}>
          <div className={styles.game_menu}>
            <p>{xTurn === true ? "X Turn" : "O Turn"}</p>
          </div>
          <div className={styles.game_board}>
            {[...Array(9)].map((x, idx) => {
              return (
                <div
                  key={idx}
                  className={`${styles.square} ${
                    wonCombo.includes(idx) ? styles.highlight : ""
                  }`}
                  onClick={() => {
                    updateBoardData(idx);
                  }}
                >
                  <p className={styles.square_input}>{boardData[idx]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`${styles.modal} ${modalTitle ? styles.show : ""}`}>
        <div className={styles.modal_title}>{modalTitle}</div>
        <button className={styles.but} onClick={reset}>
          New Game
        </button>
      </div>
    </>
  );
};

export default Gameboard;
