import React from "react";
import PropTypes from "prop-types";

const Display = ({ input }) => (
  <div className="display-container" id="display">
    {input}
  </div>
);

Display.propTypes = {
  input: PropTypes.string.isRequired
};
export default Display;
