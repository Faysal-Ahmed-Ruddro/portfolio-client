import React from "react";
import "./Button.css"

const Button = ({ buttons, filter }) => {
  return (
    <div className="text-center my-4">
      {buttons.map((cat, i) => {
        return (
          <button
            className="filter-btn m-2 text-center"
            type="button"
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
