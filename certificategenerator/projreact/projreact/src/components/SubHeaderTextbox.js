import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

export default function SubHeaderTextbox({
  onPositionChange,
  onSubheaderContentChange,
  subheaderContent,
}) {
  const [subheaderText, setSubheaderText] = useState(subheaderContent || "");
  const [isVisible, setIsVisible] = useState(true);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setSubheaderText(newText);

    onSubheaderContentChange(newText); // Update the content
  };

  const handleDrag = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    onPositionChange(newPosition);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${subheaderText.length * 10 + 100}px`;
      inputRef.current.style.marginLeft = `-${
        (subheaderText.length * 10 + 100) / 2
      }px`;
    }
  }, [subheaderText]);

  return isVisible ? (
    <Draggable onDrag={handleDrag}>
      <div style={{ position: "absolute", top: "0px", left: "50px" }}>
        <label htmlFor="subheaderTextbox" className="select-background-label">
          <input
            ref={inputRef}
            placeholder="Sub Header"
            type="text"
            id="subheaderTextbox"
            value={subheaderText}
            onChange={handleInputChange}
            style={{
              textAlign: "center",
              border: "1px solid #000",
              boxSizing: "border-box",
              background: "transparent",
              position: "relative",
            }}
          />
        </label>
      </div>
    </Draggable>
  ) : null;
}
