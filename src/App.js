import React, { useState } from "react";
import "./App.css";

function IncDec() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    num < 25 ? setNum(num + 1) : setNum(25);
  };

  const decNum = () => {
    num > 0 ? setNum(num - 1) : setNum(0);
  };
  return (
    <>
      <h1 className="head">COUNTER APP</h1>
      <div className="counter-div">
        <div class="words word-1">
          <span>H</span>
          <span>E</span>
          <span>H</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>L</span>
          <span>D</span>
        </div>

        <div>
          <h1>{num} Students</h1>
          {num === 25 ? "reached at top" : ""}
          <div className="counter-btns">
            <button onClick={decNum}>
              <span>-</span>
            </button>

            <button onClick={incNum}>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncDec;
