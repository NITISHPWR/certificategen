import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

export default function DragTextboxP(props) {
  const [textcontent, setTextcontent] = useState("");
  const [textValueOnDragStart, setTextValueOnDragStart] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const inputRef = useRef(null);
  const maxCharacterCountBeforeNewLine = 800;
  const minimumHeight = 120; // Set your desired minimum height
  const maxHeight = 421; // Set the maximum height
  const maxWidth = 500; // Set the maximum width

  const handleTextContentChange = (newTextContent) => {
    props.onTextContentChange(newTextContent);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxCharacterCountBeforeNewLine) {
      setTextcontent(inputValue);
    } else {
      // Split the input into lines
      const lines = inputValue.split("\n");

      // Create lines that fit within the maximum width
      const formattedLines = lines.map((line) => {
        let result = "";
        const words = line.split(/\s+/);

        for (const word of words) {
          const potentialLine = result ? `${result} ${word}` : word;
          if (potentialLine.length <= maxWidth) {
            result = potentialLine;
          } else {
            formattedLines.push(result);
            result = word;
          }
        }

        return result;
      });

      // Join lines with newlines to fit within the maximum width
      const formattedText = formattedLines.join("\n");

      setTextcontent(formattedText);
    }
  };

  const handleDrag = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    setPosition(newPosition);

    if (textValueOnDragStart === "") {
      setTextValueOnDragStart(textcontent);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${maxWidth}px`;

      // Calculate the height based on the number of lines and a presumed line height of 20 pixels
      let calculatedHeight = Math.max(
        textcontent.split("\n").length * 40,
        minimumHeight
      );

      // Ensure the height does not exceed the maximum height
      calculatedHeight = Math.min(calculatedHeight, maxHeight);

      inputRef.current.style.height = `${calculatedHeight}px`;

      inputRef.current.style.marginLeft = `-${maxWidth / 2}px`;
    }
  }, [textcontent, minimumHeight, maxHeight]);

  return (
    <Draggable
      onDrag={handleDrag}
      onStop={(e, data) => {
        props.onPositionChange({ x: data.x, y: data.y });
      }}
    >
      <div style={{ position: "absolute", top: "0px", left: "0px" }}>
        <textarea
          ref={inputRef}
          placeholder="Enter Text Here"
          value={textcontent}
          onChange={handleInputChange}
          onBlur={() => handleTextContentChange(textcontent)}
          style={{
            textAlign: "center",
            outline: "none",
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            overflow: "hidden",
            resize: "none",
          }}
        />
      </div>
    </Draggable>
  );
}
