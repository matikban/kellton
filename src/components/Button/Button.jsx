import React from "react";
import "./Button.scss";

const Button = ({ onClick, className, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
