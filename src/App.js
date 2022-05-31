import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  // Initial State
  const [input, setInput] = useState("0");
  const [value, setValue] = useState("");

  // RegExp for the operators
  const typeOp = /[+*/-]/,
    endsWithOp = /[+*/-]$/;

  // When a number is clicked
  const handleNumber = (str) => {
    if (str === "0" && str === input) return false;

    setInput(input === "0" ? str : input + str);
    setValue(endsWithOp.test(input) ? str : value + str);
  };

  // When a operator is clicked
  const handleOperator = (str) => {
    setValue(str);
    if (input.match(endsWithOp)) return setInput(input.slice(0, -1) + str);
    setInput(input + str);
  };

  // When the decimal is clicked
  const handleDecimal = (str) => {
    if (value.includes(str)) return false;
    setInput(input + str);
    setValue(value === "" || typeOp.test(value) ? "0" + str : value + str);
  };

  // Clear de input and oput
  const handleClear = () => {
    setInput("0");
    setValue("");
  };

  // Evaluate the formula
  const handleEqual = (str) => {
    if (
      endsWithOp.test(input) ||
      input === "" ||
      (typeOp.test(input[input.length - 2]) && input.endsWith("."))
    ) {
      return sintaxError();
    } else if (input.endsWith(".")) {
      setInput(input.slice(0, input.length - 1));
    }
    let result = Math.floor(100000 * eval(input)) / 100000;
    setInput(result.toString());
    setValue(result.toString());
  };

  const sintaxError = () => {
    setInput("SINTAX ERROR");
    setTimeout(handleClear, 1250);
    return;
  };

  return (
    <>
      <main class="main">
        <h1 className="title">JavaScript Calculator</h1>
        <div className="calculator-container">
          <div className="calculator">
            <Display input={input} />
            <Buttons
              handleEqual={handleEqual}
              handleNumber={handleNumber}
              handleDecimal={handleDecimal}
              handleOperator={handleOperator}
              handleClear={handleClear}
            />
          </div>
        </div>
      </main>

      <footer className="by">
        <p>
          Made with{" "}
          <span role="img" aria-label="love">
            💙
          </span>{" "}
          by{" "}
          <a
            href="https://github.com/jeantivan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jean Tivan
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
