import React from "react";
import Operator from "./Operator";
import PropTypes from "prop-types";

function Buttons({
  handleNumber,
  handleOperator,
  handleDecimal,
  handleEqual,
  handleClear
}) {
  let numbers = [
    {
      id: "zero",
      value: "0"
    },
    {
      id: "one",
      value: "1"
    },
    {
      id: "two",
      value: "2"
    },
    {
      id: "three",
      value: "3"
    },
    {
      id: "four",
      value: "4"
    },
    {
      id: "five",
      value: "5"
    },
    {
      id: "six",
      value: "6"
    },
    {
      id: "seven",
      value: "7"
    },
    {
      id: "eight",
      value: "8"
    },
    {
      id: "nine",
      value: "9"
    }
  ];

  let operators = [
    {
      id: "add",
      value: "+"
    },
    {
      id: "subtract",
      value: "-"
    },
    {
      id: "multiply",
      value: "*"
    },
    {
      id: "divide",
      value: "/"
    }
  ];
  let numbers_buttons, operators_buttons;

  numbers_buttons = numbers.map(obj => {
    return (
      <Operator
        id={obj.id}
        key={obj.id}
        value={obj.value}
        updateInput={handleNumber}
        type="num"
      />
    );
  });

  operators_buttons = operators.map(obj => {
    return (
      <Operator
        id={obj.id}
        key={obj.id}
        value={obj.value}
        updateInput={handleOperator}
        type="op"
      />
    );
  });

  return (
    <div id="Buttons" className="buttons-container">
      {numbers_buttons}
      {operators_buttons}
      <Operator id="decimal" value="." type="num" updateInput={handleDecimal} />
      <Operator id="equals" value="=" type="eq" updateInput={handleEqual} />
      <Operator
        id="clear"
        value="clear"
        type="clear"
        updateInput={handleClear}
      />
    </div>
  );
}

Buttons.propTypes = {
  handleNumber: PropTypes.func.isRequired,
  handleOperator: PropTypes.func.isRequired,
  handleDecimal: PropTypes.func.isRequired,
  handleEqual: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired
};

export default Buttons;
