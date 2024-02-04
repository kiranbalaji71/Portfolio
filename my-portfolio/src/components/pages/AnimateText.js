import "./AnimateText.scss";
import React from "react";

const AnimateText = ({ letter, string, index }) => {
  return (
    <span>
      {string.map((word, i) => (
        <span key={word + i} className={`${letter} _${i+index}`}>
          {word}
        </span>
      ))}
    </span>
  );
};

export default AnimateText;
