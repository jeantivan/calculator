import React from "react";
import PropTypes from "prop-types";

function Operator({ id, value, type, updateInput }) {
  return (
    <button
      id={id}
      onClick={e => {
        updateInput(value);
      }}
      className={`btn btn-${type}`}
    >
      {value}
    </button>
  );
}

Operator.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateInput: PropTypes.func.isRequired
};

export default Operator;
