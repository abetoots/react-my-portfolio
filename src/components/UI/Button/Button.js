import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

// eslint-disable-next-line react/display-name
const Button = forwardRef((props, ref) => (
  <button
    ref={ref}
    className={`Button ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
));

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
