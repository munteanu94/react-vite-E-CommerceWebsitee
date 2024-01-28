import React from "react";
import { useState } from "react";
import "./Select.css";

export default function Select({ options, currentOption, onChange }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSelect = (option, index) => {
    onChange(option);
    setSelectedIndex(index);
  };

  return (
    <div
      tabIndex={0}
      onBlur={() => setOpen(false)}
      className="select"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className={open ? "current-option active" : "current-option"}>
        <span>{currentOption}</span>
        <div className={open ? "arrow active" : "arrow"}></div>
      </div>
      <div className={open ? "options active" : "options"}>
        {options.map((option, index) => (
          <div
            onClick={() => handleSelect(option, index)}
            className={selectedIndex == index ? "option selected" : "option "}
            key={index}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
