// src/components/CertificateDesigner.js
import React, { useState } from "react";
import landscapeTemplate from "./landscape-template.png";
import portraitTemplate from "./portrait-template.jpg";
import LandscapeTemplates from "./LandscapeTemplates";
import PortraitTemplates from "./PortraitTemplates";
// Define the CertificateDesigner functional component
function CertificateDesigner() {
  // Initialize state variable 'selectedTemplate' using the useState hook, starting with 'blank'
  const [selectedTemplate, setSelectedTemplate] = useState("blank");

  // Event handler for changing the selected template
  const handleTemplateChange = (templateName) => {
    setSelectedTemplate(templateName);
  };

  // Render the selected component based on the selectedTemplate
  const renderSelectedComponent = () => {
    switch (selectedTemplate) {
      case "Landscape":
        return <LandscapeTemplates />;
      case "Portrait":
        return <PortraitTemplates />;
    }
  };

  return (
    <>
      <div className="container my-1">
        <h1 className="text-center" style={{ margin: "2px 0px" }}>
          Certificate Designer
        </h1>
        <label>Select Template:</label>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            {/* Display the border and certificates side by side */}
            <div
              className="border p-3 d-flex justify-content-around"
              style={{ margin: "2px" }}
            >
              {/* Map through the templates array */}
              {["Landscape", "Portrait"].map((templateName) => (
                <button
                  key={templateName}
                  onClick={() => handleTemplateChange(templateName)}
                  className={`${
                    selectedTemplate === templateName ? "active-template" : ""
                  }`}
                >
                  <img
                    src={
                      templateName === "Landscape"
                        ? landscapeTemplate
                        : portraitTemplate
                    }
                    alt={templateName}
                    className="img-fluid"
                  />
                  {templateName === "Landscape" ? (
                    <div style={{ marginTop: "80px", padding: "10px" }}>
                      Landscape
                    </div>
                  ) : (
                    <div style={{ marginTop: "10px", padding: "5px" }}>
                      Portrait
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render the selected component */}
      <div className="container">{renderSelectedComponent()}</div>
    </>
  );
}
export default CertificateDesigner;
