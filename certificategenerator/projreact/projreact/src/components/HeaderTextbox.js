import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

export default function HeaderTextbox(props) {
  // Initialize headerText with the value from the prop
  const inputRef = useRef(null);
  const [headerText, setHeaderText] = useState("");
  const handleInputChange = (e) => {
    // Update the state with the input value
    setHeaderText(e.target.value);
    props.onHeaderChange(e.target.value);
  };

  const handleDrag = (e, data) => {
    // Update the position when dragging occurs
    props.setHeaderPosition({ x: data.x, y: data.y });
  };

  useEffect(() => {
    // Calculate the width based on the length of the header text
    if (inputRef.current) {
      inputRef.current.style.width = `${headerText.length * 10 + 60}px`; // Adjust the factor (10) and initial width (100) based on your preference
      inputRef.current.style.marginLeft = `-${
        (headerText.length * 10 + 60) / 2
      }px`; // Center the input by adjusting negative left margin
    }
  }, [headerText]);

  return (
    <Draggable onDrag={handleDrag}>
      <div style={{ position: "absolute", top: "0px", left: "30px" }}>
        <label htmlFor="headerTextbox" className="select-background-label">
          <input
            ref={inputRef}
            placeholder="Header"
            type="text"
            id="headerTextbox"
            value={headerText}
            onChange={handleInputChange}
            style={{
              textAlign: "center", // Center the placeholder text
              border: "1px solid #000", // Add a border
              boxSizing: "border-box", // Include border in the width calculation
              background: "transparent", // Transparent background
              position: "relative", // Add position relative
            }}
          />
        </label>
      </div>
    </Draggable>
  );
}
