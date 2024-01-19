import React from "react";

export default function CertificateEditor({ certificateImage, onCancel }) {
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "red",
    fontSize: "24px",
  };

  const editorStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)", // semi-transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // adjust the z-index as needed
  };

  return (
    <div style={editorStyle}>
      <div style={closeButtonStyle} onClick={onCancel}>
        &#10006; {/* Unicode character for the "X" cross */}
      </div>
      {/* <img src={certificateImage} alt="Selected Certificate" /> */}
      <img
        src={certificateImage}
        alt="Selected Certificate"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {/* Add editing functionality or any other content here */}
    </div>
  );
}
